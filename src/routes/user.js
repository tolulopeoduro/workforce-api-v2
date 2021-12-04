import { Router } from "express";
import { addProfilePicture } from "../controllers/user/addProfilePicture";
import { getUser } from "../controllers/user/getUser";
import multerConfig from "../middleware/multer-config";

const userRoutes = new Router()

userRoutes.get("/:id" , getUser)
userRoutes.post('/update' , multerConfig , addProfilePicture)

export default userRoutes;