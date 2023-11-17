import express from "express";
import { signIn, signOut, signUp } from "../controllers/auth.controller.js";


const route = express.Router()

route.post('/signup', signUp)
route.post('/signin', signIn)
route.get('/signout', signOut)

export default route