const router = require('express').Router();
const ctrl = require('../controllers/teacher_controller');
const validate = require('../middleware/validator');
const authRequired = require('../middleware/auth_required');
const {body} = require ('express-validator');
const requireRole = require('../middleware/require_role');



const validationTeacher = [
    body('nombre').isString().trim().isLength({min: 2, max: 30}).withMessage('Formato incorrecto, revisalo'),
];

//router.use(authRequired);

/**
 * @swagger
 * /teacher:
 *   get:
 *     summary: Lista todos los teachers
 *     tags: [Teachers]
 *     responses:
 *       200:
 *         description: Lista de teachers
 */
router.get('/',  ctrl.getTeacher);


router.post('/',  validationTeacher, validate, ctrl.createTeacher);

module.exports = router;