import {Router} from "express";
import * as PositionController from "./controllers/position.controller.js";

const router = new Router();

router.route("/").get(PositionController.getAllPositions);
router.route("/").post(PositionController.createPosition);
router.route("/").patch(PositionController.updatePosition);
router.route("/:code").delete(PositionController.deletePosition);

export default router;