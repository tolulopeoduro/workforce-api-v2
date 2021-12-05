"use strict";

const {
  ObjectId
} = require("bson");

const {
  getUser
} = require("../user/getUser");

exports.getOnePost = async (req, res) => {
  const client = req.app.locals.db;
  const post = await client.db("workforce-v2").collection("posts").find({
    _id: ObjectId(req.params.id)
  }).toArray();
  res.status(200).json({
    data: post
  });
};