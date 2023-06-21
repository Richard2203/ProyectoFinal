const {} = require('pg');

const getUsers = (req, res) => {
	res.send('users');
};

module.exports = {
	getUsers,
};
