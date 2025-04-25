
import { get } from 'mongoose';
import  StaffService  from '../services/staff.service.js';
import { refreshToken } from 'firebase-admin/app';

const StaffController = {

  
  createEmployee: async (req, res) => {


    try {

        const result = await StaffService.createEmployee(req.body);
        return res.status(201).json(result); 
    } catch (error) {
        return res.status(400).json({ message: error.message }); 
    }
},  

getUser: async (req, res) => {
      try {
      
        const result = await StaffService.getAllUsers();
        return res.status(200).json(result); 
      } catch (error) {
        return res.status(400).json({ message: error.message }); 
      }
  },


  updateEmployee: async (req, res) => {
    try {
      const { maNV } = req.params;       
      const data = req.body;            
  
      
      const result = await StaffService.updateEmployee(maNV, data);
  
      if (!result.success) {
        return res.status(404).json({ message: result.message });
      }
  
      return res.status(200).json(result);
    } catch (error) {
      
      return res.status(500).json({ message: "Lỗi server: " + error.message });
    }
  },
  deleteEmployee: async (req, res) => {
    try {
      const { maNV } = req.params;   

     
      const result = await StaffService.deleteEmployee(maNV);

      if (!result.success) {
        return res.status(404).json({ message: result.message });
      }

      return res.status(200).json(result);  
    } catch (error) {
      return res.status(500).json({ message: "Lỗi server: " + error.message });
    }
  }

};

export default StaffController;
