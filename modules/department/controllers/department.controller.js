import * as DepartmentService from "../services/department.service.js";

export const getAllDepartments = async (req, res) => {
    try {
        const result = await DepartmentService.getAllDepartments(req.query);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export const createDepartment = async (req, res) => {
    try {
        const result = await DepartmentService.createDepartment(req.body);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export const updateDepartment = async (req, res) => {
    try {
        await DepartmentService.updateDepartment(req.body);
        return res.status(200).json("Department updated successfully");
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export const deleteDepartment = async (req, res) => {
    try {
        await DepartmentService.deleteDepartment(req.params.code);
        return res.status(200).json("Department deleted successfully");
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};;