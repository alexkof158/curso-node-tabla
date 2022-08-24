const fs = require('fs');
const colors = require('colors')

const crearMultiplicar = async(base = 5, listar = false, hasta = 10)=>{
    try {
           
        let salida = ''
        let consola ='';
        for ( let i = 1 ; i<hasta ; i++){
            salida+=(`${base} x ${i} = ${base*i}\n`);
            consola+=(`${base} ${'x'.bgYellow} ${i} ${'='.bgMagenta} ${base*i}\n`);
        }   
        

        if(listar){
            console.log('########'.green)
            console.log(`Tabla del ${base}`.trap)
            console.log('=========='.green)
            console.log(consola)
        } 
        fs.writeFileSync(`./salida/salida-${base}.txt`, salida);

        return 'Grabado en file text succesfull'.rainbow

    } catch (error) {
        throw(error,'error en la tabla de multiplicacións')
        
    }

        

}

module.exports = {
    crearMultiplicar
}