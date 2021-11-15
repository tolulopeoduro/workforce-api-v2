import express, { Router } from "express"
import { login } from "../controllers/auth/login"
import { signup } from "../controllers/auth/signup"

const authRoutes = new Router()

authRoutes.post("/login" , login)
authRoutes.post("/signup" , signup)

export default authRoutes