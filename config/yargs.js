const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        default: false,
        description: ' Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Listar la tabla'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Hasta Multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw ' la base tiene que ser un número'
        }
        return true;
    })
    .argv;


    module.exports = argv;