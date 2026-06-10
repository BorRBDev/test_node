const adminService = require('../services/admin_service');

exports.getAdmin = async (req, res, next) => {
  const admin = await adminService.obtenerAdmins();
  res.json(admin);
  next();
};