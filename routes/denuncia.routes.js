const express = require('express');
const router = express.Router();

const denuncia = require('../controller/denuncia.controller');

router.get('/',denuncia.index);
router.post('/',denuncia.store);
router.get('/:id',denuncia.show);
router.put('/:id',denuncia.update);
router.put('/:id/delete',denuncia.delete);
router.put('/:id/activate',denuncia.activate);

module.exports = router;