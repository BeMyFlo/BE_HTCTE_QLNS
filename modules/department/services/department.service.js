import * as DepartmentRepository from '../repositories/department.repository.js';

export async function getAllDepartments({limit=10, page=1, order='createdAt', sort='asc'}) {
    return await DepartmentRepository.findAll({limit, page, order, sort})
}

export const createDepartment = async ({code, name, description}) => {
    const foundDepartment = await DepartmentRepository.findOneByCode(code);

    if (foundDepartment)
        throw new Error("Department already exists");

    return DepartmentRepository.create({code, name, description});
}


export async function updateDepartment({code, ...data}) {
    if (!code)
        throw new Error(`Code is required`);

    return DepartmentRepository.updateByCode({code, data});
}

export async function deleteDepartment(id) {
    return  await DepartmentRepository.deleteByCode(id)
}


