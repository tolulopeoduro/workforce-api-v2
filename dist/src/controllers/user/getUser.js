"use strict";

const {
  ObjectId
} = require("bson");

exports.getUser = async (req, res) => {
  const client = req.app.locals.db;
  const user = await client.db("workforce-v2").collection("users").findOne({
    _id: ObjectId(req.params.id)
  });
  res.status(200).json({
    data: user
  });
};