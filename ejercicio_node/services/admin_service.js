const Admin = require('../models/Admin');

exports.obtenerAdmins = () => Admin.find();