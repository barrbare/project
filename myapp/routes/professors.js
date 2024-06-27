const express = require('express');
const router = express.Router();

const professorService = require('../services/professorService');
const ApiSecurity = require('../middleware/apiSecurity');

router.get('/all', ApiSecurity.requireLogin, professorService.getAll);
router.get('/:id', ApiSecurity.requireLogin, professorService.getOne);
router.post('/add', ApiSecurity.requirePermits('manage_professor'),  professorService.add);
router.delete('/:id', ApiSecurity.requirePermits('manage_professor'), professorService.delete);
router.put('/:id', ApiSecurity.requirePermits('manage_professor'), professorService.update);

module.exports = router;
