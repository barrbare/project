const express = require('express');
const router = express.Router();

const departmentService = require('../services/departmentService');

router.get('/all', departmentService.getAll);
router.get('/:id', departmentService.getOne);
router.post('/add', departmentService.add);
router.delete('/:id', departmentService.delete);
router.put('/:id', departmentService.update);

module.exports = router;