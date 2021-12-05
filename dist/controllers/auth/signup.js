"use strict";

var _bcrypt = require("bcrypt");

var _bson = require("bson");

const {
  MongoClient,
  Db
} = require("mongodb");

const jwt = require("jsonwebtoken");

const mongodb = require("../../../index");

exports.signup = async (req, res, next) => {
  const client = req.app.locals.db;
  const p = await client.db("workforce-v2").collection("users").find({
    email: req.body.email
  }).count();

  if (p > 0) {
    return res.status(401).json({
      message: "email already used"
    });
  }

  (0, _bcrypt.hash)(req.body.password, 10, async (err, hash) => {
    if (err) return;
    req.body.password = hash;
    const newData = await client.db("workforce-v2").collection("users").insertOne(req.body);
    const user = await client.db("workforce-v2").collection("users").findOne({
      _id: (0, _bson.ObjectID)(newData.insertedId)
    });
    const token = await jwt.sign({
      userId: user._id
    }, "my-string", {
      expiresIn: '24h'
    });
    console.log(user);
    res.status(201).json({
      userId: user._id,
      token: token
    });
  });
  next;
};