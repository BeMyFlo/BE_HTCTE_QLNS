import {DepartmentModel} from "../models/department.model.js";

export const findAll = async ({limit, page, order, sort}) => {
    return await DepartmentModel.paginate({visible: true}, { limit, page, order, sort: {[order]: sort === 'asc' ? 1 : -1}});
}


export const updateByCode = ({code, data}) => {
    return DepartmentModel.findOneAndUpdate({code, visible: true}, data, {new: true});
}

export const findOneByCode = async (code) => {
    return await DepartmentModel.findOne({code, visible: true});
}
export const create = async (data) => {
    return await DepartmentModel.create(data);
}

export const deleteByCode = async (code) => {
    return await DepartmentModel.findOneAndUpdate({code, visible: true}, {visible: false, deletedAt: Date.now()}, {new: true});
}
