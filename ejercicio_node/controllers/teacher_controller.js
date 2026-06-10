const teacherService = require('../services/teacher_service');

exports.getTeacher = async (req, res, next) => {
  const teacher = await teacherService.obtenerTeachers();
  res.status(200).json(teacher);
  next();
};

exports.createTeacher = async (req, res, next) => {
    const teacher = await teacherService.create(req.body);
    res.status(201).json(teacher);
    next();
}