jest.mock('../../models/Teacher');
const Teacher = require('../../models/Teacher');
const service = require('../../services/teacher_service');

describe('teacher_service obtenerTeachers',() => {
    it(' obtener teacher al llamar Teacher.find', async () => {
    Teacher.find.mockResolvedValue([{ nombre: 'Peppa Pig', email: 'aa@.com'}]);
    const result = await service.obtenerTeachers();
    expect(Teacher.find).toHaveBeenCalled();
    expect(result).toEqual([{nombre: 'Peppa Pig', email:'aa@.com'}]);
    });
});

describe('teacher_service create',() => {
    it(' obtener teacher al llamar Teacher.create', async () => {
        Teacher.create.mockResolvedValue([{nombre: 'Alejandro'}]);
        const result = await service.create();
        console.log(result);
        expect(Teacher.create).toHaveBeenCalled();
        expect(result).toEqual([{nombre: 'Alejandro'}]);
    });
});