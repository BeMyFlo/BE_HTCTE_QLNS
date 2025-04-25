import {PositionModel} from "../models/position.model.js";

export const findAll = async ({limit, page, order, sort}) => {
    return await PositionModel.paginate({visible: true}, { limit, page, order, sort: {[order]: sort === 'asc' ? 1 : -1}});
}

export const updateByCode = ({code, data}) => {
    return PositionModel.findOneAndUpdate({code, visible: true}, data, {new: true});
}

export const findOneByCode = async (code) => {
    return await PositionModel.findOne({code, visible: true});
}

export const create = async (data) => {
    return await PositionModel.create(data);
}

export const deleteByCode = async (code) => {
    return await PositionModel.findOneAndUpdate({code, visible: true}, {visible: false, deletedAt: Date.now()}, {new: true});
}