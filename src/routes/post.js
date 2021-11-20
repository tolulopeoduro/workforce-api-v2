import { Router } from "express";
import { createPost } from "../controllers/posts/createPost";
import { getAllPosts } from "../controllers/posts/getAllPosts";
import { getOnePost } from "../controllers/posts/getOnePost";

const postRoutes = new Router()

postRoutes.post("/" , createPost)
postRoutes.get("/" , getAllPosts)
postRoutes.get("/:id" , getOnePost )

export default postRoutes