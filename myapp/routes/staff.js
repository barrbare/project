const express = require('express');
const router = express.Router();

const staffService = require('../services/staffService');

router.get('/all', staffService.getAll);
router.get('/:id', staffService.getOne);
router.post('/add', staffService.add);
router.delete('/:id', staffService.delete);
router.put('/:id', staffService.update);

module.exports = router;