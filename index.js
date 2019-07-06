const express = require('express');
const morgan  = require('morgan');
const app = express();
var cors = require('cors')

const {mongoose } = require('./database')

//settings
app.set('port',process.env.PORT || 3000);
app.set('host','0.0.0.0');
app.use(cors())

//middlewares
app.use(morgan('dev'))
app.use(express.json());

console.log("PUERTO: ",app.get('port'),"HOST: ",app.get('host'))

//routes
//app.use('/api/v1/sucursales',require('./routes/sucursal.routes'));
app.use('/api/v1/users',require('./routes/user.routes'));
app.use('/api/v1/auth',require('./routes/auth.route'));
app.use('/api/v1/denuncias',require('./routes/denuncia.routes'));
//starting the server
app.listen(app.get('port'),app.get('host'), ()=>{
    console.log("Server on port 3000");
});