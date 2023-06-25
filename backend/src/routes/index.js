const { Router } = require('express');
const router = Router();

const {
	getUsers,
	getMessageUsuarioById,
	createUsers,
	deleteMessageUserById,
	updateMessage,
	getPedidos,
	getPedidoById,
	createPedido,
	deletePedidoById,
	updatePedido,
} = require('../controllers/index.controller');

//MENSAJES
router.get('/users', getUsers);
router.get('/users/:id', getMessageUsuarioById);
router.post('/users', createUsers);
router.delete('/users/:id', deleteMessageUserById);
router.put('/users/:id', updateMessage);

//PEDIDOS
router.get('/pedidos', getPedidos);
router.get('/pedidos/:id', getPedidoById);
router.post('/pedidos', createPedido);
router.delete('/pedidos/:id', deletePedidoById);
router.put('/pedidos/:id', updatePedido);

module.exports = router;
