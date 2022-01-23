import { Router } from "express";
import { addProfilePicture } from "../controllers/user/addProfilePicture";
import { getUser } from "../controllers/user/getUser";
import { follow } from "../controllers/user/follow";
import multerConfig from "../middleware/multer-config";
import { auth } from "../middleware/auth";
import { unfollow } from "../controllers/user/unfollow";
import { changeName } from "../controllers/user/changeName";

const userRoutes = new Router()

userRoutes.get("/:id" , getUser)
userRoutes.post('/update/profile-picture' , auth , multerConfig , addProfilePicture)
userRoutes.post('/unfollow/:id' , auth , unfollow)
userRoutes.post('/follow/:id' , auth , follow)
userRoutes.post('/update/name' , auth , changeName)

export default userRoutes;