"use strict";

exports.getUserPosts = async (req, res) => {
  const client = req.app.locals.db;
  const post = await client.db("workforce-v2").collection("posts").find({
    author: req.params.id
  }).toArray();
  res.status(200).json({
    data: post
  });
};