const express = require('express');
const router = express.Router();

const user = require('../controller/user.controller');

router.get('/',user.index);
router.post('/',user.store);
router.get('/:id',user.show);
router.put('/:id',user.update);
router.put('/:id/delete',user.delete);
router.put('/:id/activate',user.activate);

module.exports = router;