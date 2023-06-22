const { Router } = require('express');
const router = Router();

const {
	getUsers,
	getMessageUsuarioById,
	createUsers,
	deleteMessageUserById,
} = require('../controllers/index.controller');

router.get('/users', getUsers);
router.get('/users/:id', getMessageUsuarioById);
router.post('/users', createUsers);
router.delete('/users/:id', deleteMessageUserById);

module.exports = router;
