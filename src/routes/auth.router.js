import { Router } from "express";
import { registerController } from "../controllers/auth.controller";

import { validator } from "../middleware/validator.middleware";
import { userRegisterValidator } from "../validator/index.js";

const router = Router();

router
  .route("/registeruser")
  .post(userRegisterValidator(), validator, registerController);

export default router