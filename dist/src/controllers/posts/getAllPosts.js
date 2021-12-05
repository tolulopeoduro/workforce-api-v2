"use strict";

exports.getAllPosts = async (req, res) => {
  const client = req.app.locals.db;
  const posts = await client.db("workforce-v2").collection("posts").find().toArray();
  res.status(200).json({
    data: posts
  });
};