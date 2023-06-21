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
	console.log(response.rows);
	res.send('users');
};

module.exports = {
	getUsers,
};
