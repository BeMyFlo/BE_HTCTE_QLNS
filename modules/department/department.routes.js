import {Router} from "express";
import * as DepartmentController from "./controllers/department.controller.js";

const router = new Router();

router.route("/").get(DepartmentController.getAllDepartments);
router.route("/").post(DepartmentController.createDepartment);
router.route("/").patch(DepartmentController.updateDepartment);
router.route("/:code").delete(DepartmentController.deleteDepartment);

export default router;