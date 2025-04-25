import * as AllowanceService from "../services/allowance.service.js";

export const getAllAllowances = async (req, res) => {
    try {
        const result = await AllowanceService.getAllAllowances(req.query);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};


export const createAllowance = async (req, res) => {
    try {
        const result = await AllowanceService.createAllowance(req.body);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export const updateAllowance = async (req, res) => {
    try {
        await AllowanceService.updateAllowance(req.body);
        return res.status(200).json("Allowance updated successfully");
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export const deleteAllowance = async (req, res) => {
    try {
        await AllowanceService.deleteAllowance(req.params.code);
        return res.status(200).json("Allowance deleted successfully");
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};