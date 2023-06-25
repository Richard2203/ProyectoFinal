const { Pool } = require('pg');

const pool = new Pool({
	host: 'localhost',
	user: 'postgres',
	password: 'admin',
	database: 'form',
	port: '5433',
});

const getUsers = async (req, res) => {
	const response = await pool.query('SELECT * FROM usuario');
	//console.log(response.rows);
	//res.send('users');
	res.status(200).json(response.rows);
};

const getMessageUsuarioById = async (req, res) => {
	const response = await pool.query(
		'SELECT * FROM usuario WHERE idcliente = $1',
		[req.params.id]
	);
	res.json(response.rows);
};

const createUsers = async (req, res) => {
	const { nombre, email, asunto, mensaje } = req.body;
	const response = await pool.query(
		'INSERT INTO usuario(nombre, email, asunto, mensaje) values($1,$2,$3,$4)',
		[nombre, email, asunto, mensaje]
	);

	console.log(response);
	res.json({
		message: 'mensaje de formulario guardado',
		body: {
			user: { nombre },
		},
	});
};

const deleteMessageUserById = async (req, res) => {
	const id = req.params.id;
	const response = await pool.query(
		'DELETE FROM usuario WHERE idcliente=$1',
		[id]
	);
	res.json('Mensaje de usuario ' + id + ' eleminado');
};

const updateMessage = async (req, res) => {
	const id = req.params.id;
	const { nombre, email, asunto, mensaje } = req.body;
	const response = await pool.query(
		'UPDATE usuario SET nombre=$1, email=$2, asunto=$3, mensaje=$4 WHERE idcliente=$5',
		[nombre, email, asunto, mensaje, id]
	);
	res.json('Mensaje de usuario (' + id + ') actualizado');
};

module.exports = {
	getUsers,
	getMessageUsuarioById,
	createUsers,
	deleteMessageUserById,
	updateMessage,
};
