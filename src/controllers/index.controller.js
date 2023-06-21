const { Pol, Pool } = require('pg');

const pool = new Pool({
	host: 'localhost',
	user: 'postgress',
	password: 'admin',
	database: 'form',
	port: '5432',
});

const getUsers = async (req, res) => {
	const response = await pool.query('SELECT * FROM form');
};

module.exports = {
	getUsers,
};
