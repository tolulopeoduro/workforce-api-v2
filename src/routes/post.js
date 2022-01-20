import { Router } from "express";
import { createPost } from "../controllers/posts/createPost";
import { deletePost } from "../controllers/posts/deletePost";
import { getAllPosts } from "../controllers/posts/getAllPosts";
import { getOnePost } from "../controllers/posts/getOnePost";
import { getUserPosts } from "../controllers/posts/getUserPosts";
import { updatePost } from "../controllers/posts/updatePost";
import { likePost } from "../controllers/posts/likePost";
import { auth } from "../middleware/auth";
import { unLike } from "../controllers/posts/unlikePost";
import { comment } from "../controllers/posts/comment";
import multerConfig from "../middleware/multer-config";

const postRoutes = new Router()

postRoutes.post("/" , auth , multerConfig , createPost)
postRoutes.get("/" , getAllPosts)
postRoutes.get("/:id" , getOnePost)
postRoutes.put("/:id" , auth , multerConfig , updatePost)
postRoutes.delete("/:id" , auth , deletePost)
postRoutes.get("/user/:id" , getUserPosts)
postRoutes.post("/like/:id" , auth , likePost)
postRoutes.post("/unlike/:id" , auth , unLike)
postRoutes.post("/comment/:id" , auth , comment)

export default postRoutes