const express = require('express');
const router = express.Router();

const staffService = require('../services/staffService');
const ApiSecurity = require('../middleware/apiSecurity');

router.get('/all', ApiSecurity.requireLogin, staffService.getAll);
router.get('/:id', ApiSecurity.requireLogin, staffService.getOne);
router.post('/add', ApiSecurity.requirePermits('manage_staff'), staffService.add);
router.delete('/:id', ApiSecurity.requirePermits('manage_staff'), staffService.delete);
router.put('/:id', ApiSecurity.requirePermits('manage_staff'),  staffService.update);

module.exports = router;