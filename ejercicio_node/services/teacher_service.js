const Teacher = require('../models/Teacher');

exports.obtenerTeachers = () => Teacher.find();
exports.create = (data) => Teacher.create(data);
