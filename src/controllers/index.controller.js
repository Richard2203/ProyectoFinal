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

const createUsers = async (req, res) => {};

module.exports = {
	getUsers,
};
