import * as PositionRepository from '../repositories/position.repository.js'
import * as AllowanceRepository from '../../allowance/repositories/allowance.repository.js'

export const getAllPositions = async ({limit=10, page=1, order='createdAt', sort='asc'}) => {
    return await PositionRepository.findAll({limit, page, order, sort});
}

export const createPosition =async ({code, name, allowances}) => {
    const foundPosition = await PositionRepository.findOneByCode(code);
    if (foundPosition)
        throw new Error(`Position already exists`);

    for (const allowance of allowances) {
        const foundAllowance = await AllowanceRepository.findByCode(allowance);
        if (!foundAllowance)
            throw new Error(`Invalid allowances`);
    }

    return PositionRepository.create({code, name, allowances});
}

export async function updatePosition({code, ...data}) {
    if (!code)
        throw new Error(`Code is required`);

    if (data.allowances)
        for (const allowance of data.allowances) {
            const foundAllowance = await AllowanceRepository.findByCode(allowance);
            if (!foundAllowance)
                throw new Error(`Invalid allowances`);
        }

    return PositionRepository.updateByCode({code, data});
}

export async function deletePosition(code) {
    return await PositionRepository.deleteByCode(code);
}