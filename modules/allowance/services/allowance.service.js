import * as AllowanceRepository from "../repositories/allowance.repository.js";

export const getAllAllowances = async ({limit=10, page=1, order='createdAt', sort='asc'}) => {
    return await AllowanceRepository.findAll({limit, page, order, sort})
}


export const createAllowance = async ({code, name, value}) => {
    const foundAllowance = await AllowanceRepository.findByCode(code)

    if (foundAllowance)
        throw new Error("Allowance allowance already exists");

    return await AllowanceRepository.create({code, name, value});
}

export async function updateAllowance({code, ...data}) {
    if (!code)
        throw new Error(`Code is required`);

    return AllowanceRepository.updateByCode({code, data});
}

export const deleteAllowance = async (code) => {
    return await AllowanceRepository.deleteByCode(code);
}