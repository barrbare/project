const express = require('express');
const router = express.Router();

const departmentService = require('../services/departmentService');
const ApiSecurity = require('../middleware/apiSecurity');

router.get('/all', ApiSecurity.requireLogin, departmentService.getAll);
router.get('/:id', ApiSecurity.requireLogin, departmentService.getOne);
router.post('/add', ApiSecurity.requirePermits('manage_department'), departmentService.add);
router.delete('/:id', ApiSecurity.requirePermits('manage_department'), departmentService.delete);
router.put('/:id', ApiSecurity.requirePermits('manage_department'), departmentService.update);

module.exports = router;