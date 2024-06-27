const express = require('express');
const router = express.Router();

const professorService = require('../services/professorService');



router.get('/all', professorService.getAll);
router.get('/:id', professorService.getOne);
router.post('/add', professorService.add);
router.delete('/:id', professorService.delete);
router.put('/:id', professorService.update);

module.exports = router;
