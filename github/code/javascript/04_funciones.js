var nomberApellido = 'Halex Illescas'
var edad = 25

// Función tipo declarativa
function impprimirEdad(nombre, edad){
    console.log( `${nombre} tiene la edad de ${edad}.` )
}

// Función tipo flecha
var imprimirEdad2 = (nombre, edad)=> {
    console.log( `${nombre} tiene la edad de ${edad}.` )
}


// Función tipo expresiva
impprimirEdad( nombreApellido, edad )
