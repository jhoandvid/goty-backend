const express=require('express');

require('dotenv').config();

const cors=require('cors');

const {dbConnection}=require('./database/config');
const goty = require('./routes/goty');


const app=express();


app.use(cors());


//Configuración de la base de datos
dbConnection();


//Lectura y parse de body
app.use(express.json());


//Rutas
app.use('/api/goty', goty)

console.log(process.env.DB_CNN)

app.listen(process.env.PORT, ()=>{
    console.log('Servidor corriendo en el puerto '+ process.env.PORT)
})