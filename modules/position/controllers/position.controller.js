import * as PositionService from "../services/position.service.js";

export const getAllPositions = async (req, res) => {
    try {
        const result = await PositionService.getAllPositions(req.query);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export const createPosition = async (req, res) => {
    try {
        const result = await PositionService.createPosition(req.body);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export const updatePosition = async (req, res) => {
    try {
        await PositionService.updatePosition(req.body);
        return res.status(200).json("Position updated successfully");
    } catch (error) {
        return res.status(500).json({success: false, message: error.message});
    }
}

export const deletePosition = async (req, res) => {
    try {
        await PositionService.deletePosition(req.params.code);
        return res.status(200).json("Position deleted successfully");
    } catch (error) {
        return res.status(500).json({success: false, message: error.message});
    }
};