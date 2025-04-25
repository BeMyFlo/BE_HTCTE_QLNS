
import { get } from 'mongoose';
import { StaffService } from '../services/staff.service.js';
import { refreshToken } from 'firebase-admin/app';


export const StaffController = {
  // API xử lý yêu cầu tạo mới nhân viên
  createEmployee: async (req, res) => {


    try {

        const result = await StaffService.createEmployee(req.body);
        return res.status(201).json(result); // Trả về thông báo thành công
    } catch (error) {
        return res.status(400).json({ message: error.message }); // Trả về lỗi
    }
},  

getUser: async (req, res) => {


      try {
      
        const result = await StaffService.getAllUsers();
        return res.status(200).json(result); // Trả về thông tin nhân viên
      } catch (error) {
        return res.status(400).json({ message: error.message }); // Trả về lỗi
      }
  }


}; 