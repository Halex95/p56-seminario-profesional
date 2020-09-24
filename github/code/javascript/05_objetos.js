var docente1 = {
    nombre: 'Halex',
    apellido: 'Illescas',
    afiliacion: 'Universidad Politécnica Salesiana',
    correo_electronico: 'hillescas@est.ups.edu.ec',
}

var docente2 = {
    nombre: 'Luis',
    apellido: 'Fernandez',
    afiliacion: 'Universidad Politécnica Salesiana',
    correo_electronico: 'lfernandez@est.ups.edu.ec',
}

function imprimirNombreMayuscula(objeto){
    var {nombre} = objeto
    console.log(`${nombre.toUpperCase()} ${objeto.apellido}`)
}

function imprimirNombreMinuscula(objeto){
    console.log( `${objeto.nombre.toLowerCase()} ${objeto.apellido}`)
}

function imprimirApellidoMayuscula(objeto){
    console.log( `${apellido.toUpperCase()}`)
}

imprimirNombreMayuscula( docente1 )
imprimirNombreMinuscula( docente1 )
imprimirApellidoMayuscula( docente2 )