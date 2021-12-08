import { Router } from "express";
import { addProfilePicture } from "../controllers/user/addProfilePicture";
import { getUser } from "../controllers/user/getUser";
import { follow } from "../controllers/user/follow";
import multerConfig from "../middleware/multer-config";
import { auth } from "../middleware/auth";
import { unfollow } from "../controllers/user/unfollow";

const userRoutes = new Router()

userRoutes.get("/:id" , getUser)
userRoutes.post('/update' , auth , multerConfig , addProfilePicture)
userRoutes.post('/unfollow/:id' , auth , unfollow)
userRoutes.post('/follow/:id' , auth , follow)

export default userRoutes;