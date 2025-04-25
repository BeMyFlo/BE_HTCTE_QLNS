import {AllowanceModel} from "../models/allowance.model.js";

export  const findAll = async ({limit, page, order, sort}) => {
    return await AllowanceModel.paginate({visible: true}, { limit, page, order, sort: {[order]: sort === 'asc' ? 1 : -1}});
}


export const findByCode = async (code) => {
    return await AllowanceModel.findOne({code, visible: true}).lean().exec()
}

export const create = async ({code, name, value}) => {
    return await AllowanceModel.create({code, name, value})
}

export const updateByCode = ({code, data}) => {
    return AllowanceModel.findOneAndUpdate({code, visible: true}, data, {new: true});
}

export const deleteByCode = async (code) => {
    return await AllowanceModel.findOneAndUpdate({code, visible: true}, {visible: false, deletedAt: Date.now()}, {new: true});
}