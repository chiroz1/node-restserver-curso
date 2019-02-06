//==============
// PUERTO
//==============
process.env.PORT = process.env.PORT || 3000;

//==============
// ENTORNO
//==============

//si la variable no existe, entonces quiere decir que estamos en modo desarrollo 'dev'
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//==============
// VENCIMIENTO DEL TOKEN
//==============
//60 segundos
//60 minutos
//24 horas
//30 días

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//==============
// SEED DE AUTENTICACIÓN
//==============
let seed;
if (process.env.NODE_ENV === 'dev') {
    seed = 'este-es-el-seed-desarrollo'; //local
} else {
    seed = process.env.SEED; //remota
}

process.env.SEED = seed;

//==============
// BASE DE DATOS
//==============

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'; //LOCAL
} else {
    urlDB = process.env.MONGO_URI; //REMOTA
}

process.env.URLDB = urlDB;