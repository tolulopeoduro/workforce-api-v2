import { Router } from "express";
import { getUser } from "../controllers/user/getUser";

const userRoutes = new Router()

userRoutes.get("/:id" , getUser)

export default userRoutes;