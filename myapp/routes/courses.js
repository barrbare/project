const express = require('express');
const router = express.Router();

const courseService = require('../services/courseSErvice');
const ApiSecurity = require('../middleware/apiSecurity');

router.get('/all', ApiSecurity.requireLogin, courseService.getAll);
router.get('/:id', ApiSecurity.requireLogin, courseService.getOne);
router.post('/add', ApiSecurity.requirePermits('manage_course'), courseService.add);
router.delete('/:id', ApiSecurity.requirePermits('manage_course'), courseService.delete);
router.put('/:id', ApiSecurity.requirePermits('manage_course'), courseService.update);

module.exports = router;