const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    nombre: { type: String, required: true},

});

module.exports = mongoose.model('Teacher', teacherSchema, 'teacher');