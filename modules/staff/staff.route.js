import { Router } from "express";
import { StaffController } from "./controllers/staff.controller.js";





const router = new Router();
        // Route thêm nhân viên
        router
        .route("/create").post(StaffController.createEmployee);
        router.route("/get").get(StaffController.getUser);


        export default router;
