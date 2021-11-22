import { Router } from "express";
import { createPost } from "../controllers/posts/createPost";
import { deletePost } from "../controllers/posts/deletePost";
import { getAllPosts } from "../controllers/posts/getAllPosts";
import { getOnePost } from "../controllers/posts/getOnePost";
import { updatePost } from "../controllers/posts/updatePost";

const postRoutes = new Router()

postRoutes.post("/" , createPost)
postRoutes.get("/" , getAllPosts)
postRoutes.get("/:id" , getOnePost)
postRoutes.put("/:id" , updatePost)
postRoutes.delete("/:id" , deletePost)

export default postRoutes