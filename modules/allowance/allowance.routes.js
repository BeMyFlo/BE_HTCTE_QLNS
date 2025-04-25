import {Router} from "express";
import * as AllowanceController from "./controllers/allowance.controller.js";

const router = new Router();

router.route("/").get(AllowanceController.getAllAllowances);
router.route("/").post(AllowanceController.createAllowance);
router.route("/").patch(AllowanceController.updateAllowance);
router.route("/:code").delete(AllowanceController.deleteAllowance);

export default router;