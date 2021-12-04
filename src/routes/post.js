import { Router } from "express";
import { createPost } from "../controllers/posts/createPost";
import { deletePost } from "../controllers/posts/deletePost";
import { getAllPosts } from "../controllers/posts/getAllPosts";
import { getOnePost } from "../controllers/posts/getOnePost";
import { getUserPosts } from "../controllers/posts/getUserPosts";
import { updatePost } from "../controllers/posts/updatePost";

const postRoutes = new Router()

postRoutes.post("/" , createPost)
postRoutes.get("/" , getAllPosts)
postRoutes.get("/:id" , getOnePost)
postRoutes.put("/:id" , updatePost)
postRoutes.delete("/:id" , deletePost)
postRoutes.get("/user/:id" , getUserPosts)

export default postRoutes