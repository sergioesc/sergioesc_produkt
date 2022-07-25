import express from "express";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { generateToken, isAuth } from "../utils.js";
import expressAsyncHandler from "express-async-handler";

const userRouter = express.Router();
