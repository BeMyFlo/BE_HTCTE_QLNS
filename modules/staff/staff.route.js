import { Router } from "express";
import StaffController from "../staff/controllers/staff.controller.js"; 



const router = new Router();
        // Route thêm nhân viên
        router
        .route("/create").post(StaffController.createEmployee);
        router.route("/get").get(StaffController.getUser);
        router.route("/update/:maNV").put(StaffController.updateEmployee);
        router.route("/delete/:maNV").delete(StaffController.deleteEmployee); 

        
        export default router;
