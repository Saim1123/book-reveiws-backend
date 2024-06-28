import { Router } from "express";
import { login, register } from "../controllers/user.controllers.js";
import joiMiddleware from "../middleware/joi.middleware.js";
import {
  registerValidation,
  loginValidation,
} from "../validation/user.validations.js";

const router = Router();

router.post("/signup", joiMiddleware(registerValidation), register);
router.post("/login", joiMiddleware(loginValidation), login);

export { router };
