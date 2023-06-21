const express = require('express');
const app = express();

//middlewares
app.use(express.json()); //datos recibidos mediante json
app.use(express.urlencoded({ extended: false })); //datos recibidos mediante formulario

// Routes
app.use(require('./routes/index'));

app.listen(3000);
console.log('Server on port 3000');
