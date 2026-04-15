import { Router } from "express"
import * as constroller from "./auth.controller.js"
import validate from "../../common/middleware/validate.middleware.js"
import RegisterDto from "./dto/register.dto.js"
import authModel from "./auth.model.js";
import { authenticate } from "./auth.middleware.js";
import LoginDto from "./dto/login.dto.js";

const router = Router();

router.post("/register", validate(RegisterDto), constroller.register)
router.post("/login", validate(LoginDto), constroller.login);
router.post("/logout", authenticate, constroller.logout);
router.get("/me", authenticate, constroller.getMe);


export default router;
