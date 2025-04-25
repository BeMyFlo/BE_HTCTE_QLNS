// import { StaffModel } from "../models/staff.js"; 
import StaffRepository from "../repository/staff.repository.js "; // Đường dẫn đến StaffRepository
import { StaffModel  } from "../models/staff.js"; // Đường dẫn đến StaffService


export const StaffService = {
  createEmployee: async (data) => {
      try {
        const {
          MaNV, GioiTinh, HoTen, PhongBan, NgayCap, NgaySinh, NVPhuTrach, ChucVu,
          BiDanh, DiaChi, CCCD, TinhTrangHonNhan, DienThoaiLH, Email, FAX,
          TrangThai, NoiCap, Tinh, QuanHuyen, ThanhPhanGD } = data ; 


        const emailExists = await StaffRepository.exsistByEmail(Email); 

          if(emailExists.success){
            return res.status(400).json({ message: "Email already exits." });
          }

          const staffData = new StaffModel({
            MaNV, GioiTinh, HoTen, PhongBan, NgayCap, NgaySinh, NVPhuTrach, ChucVu,
            BiDanh, DiaChi, CCCD, TinhTrangHonNhan, DienThoaiLH, Email, FAX,
            TrangThai, NoiCap, Tinh, QuanHuyen, ThanhPhanGD
        });

       console.log(staffData);
        

        const savedStaff = await staffData.save();
        return { success: true, message: "Employee created successfully", data: savedStaff };

      }
      catch (error){
          throw new Error("Tạo nhân viên thất bại: " + error.message);
      } 
    },

    getAllUsers: async () => {
      try {
        const users = await StaffModel.find({}); // Lấy tất cả nhân viên
    
        return {
          success: true,
          message: "All users retrieved successfully",
          data: users,
        };
      } catch (error) {
        console.error(error);
        throw new Error("Error retrieving users: " + error.message);
      }
    }
    

  };

  

  