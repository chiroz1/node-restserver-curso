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
// BASE DE DATOS
//==============

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'; //LOCAL
} else {
    urlDB = 'mongodb://cafe-user:P123456@ds253324.mlab.com:53324/cafe'; //REMOTA
}

process.env.URLDB = urlDB;