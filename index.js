const express = require('express');
const morgan  = require('morgan');
const app = express();

const {mongoose } = require('./database')

//settings
app.set('port',process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'))
app.use(express.json());

//routes
app.use('/api/v1/users',require('./routes/user.routes'));
app.use('/api/v1/denuncias',require('./routes/denuncia.routes'));
//starting the server
app.listen(app.get('port'),()=>{
    console.log("Server on port 3000");
});