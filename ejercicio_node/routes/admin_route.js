const router = require('express').Router();
const ctrl = require('../controllers/admin_controller');

router.get('/', ctrl.getAdmin);

module.exports = router;