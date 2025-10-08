import { Request, Response } from "express";
import { connectDB } from "../config/database";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import { Usuario} from "../models/usuario";

