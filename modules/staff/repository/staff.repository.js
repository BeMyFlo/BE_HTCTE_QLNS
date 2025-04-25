import { StaffModel }  from '../models/staff.js';  

class StaffRepository {
  // Phương thức tạo nhân viên mới
  static async create(employeeData) {
      try {
          const newEmployee = new StaffModel(employeeData);
          await newEmployee.save(); 
          return newEmployee; // 
      } catch (error) {
          console.error('Error saving employee:', error);
          throw new Error('Error saving employee');
      }
  }


  static async exsistByEmail(email) {
    if (!email || typeof email !== 'string') {
        throw new Error('Invalid email format');
    }
    try {
     
        const employee = await StaffModel.findOne({ Email: email });

     
        if (employee) {
            return { success: true, message: 'Email already exists' };
        }

      
        return { success: false, message: 'Email is available' };
    } catch (error) {
        console.error('Error checking email existence:', error);
        throw new Error('Error checking email existence');
    }
}



static async findByMaNV(maNV) {
  try {
    const employee = await StaffModel.findOne({ MaNV: maNV });
    if (!employee) {
      return null;
    }
    return employee;
  } catch (error) {
    console.error('Error finding employee by MaNV:', error);
    throw new Error('Error finding employee by MaNV');
  }
}


};





export default StaffRepository;