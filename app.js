const { crearMultiplicar} = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear();

//const base = 5;

crearMultiplicar(argv.b, argv.l,argv.h)
  .then(nombreArchivo =>console.log(nombreArchivo, 'creado'))
    .catch(err=>console.log(err, 'Error en matematicas'))
