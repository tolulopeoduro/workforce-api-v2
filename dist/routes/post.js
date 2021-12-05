"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _createPost = require("../controllers/posts/createPost");

var _deletePost = require("../controllers/posts/deletePost");

var _getAllPosts = require("../controllers/posts/getAllPosts");

var _getOnePost = require("../controllers/posts/getOnePost");

var _getUserPosts = require("../controllers/posts/getUserPosts");

var _updatePost = require("../controllers/posts/updatePost");

const postRoutes = new _express.Router();
postRoutes.post("/", _createPost.createPost);
postRoutes.get("/", _getAllPosts.getAllPosts);
postRoutes.get("/:id", _getOnePost.getOnePost);
postRoutes.put("/:id", _updatePost.updatePost);
postRoutes.delete("/:id", _deletePost.deletePost);
postRoutes.get("/user/:id", _getUserPosts.getUserPosts);
var _default = postRoutes;
exports.default = _default;