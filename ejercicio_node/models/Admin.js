const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    nombre: { type: String, required: true},

});

module.exports = mongoose.model('Admin', adminSchema, 'admin');