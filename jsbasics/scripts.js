let operacion = prompt ("Ingrese un color: rojo, verde, azul")
console.log(operacion)

operacion = operacion.toUpperCase()

switch (operacion) {
    case "ROJO":
        console.log ("Rojo: El color de la pasion")
        break;

    case "AZUL":
        console.log ("Azul: El color del mar")
        break;

    case "VERDE":
        console.log ("Verde: El color de la naturaleza")
        break;

    default:
        console.log ("Operacion no valida")
        break;
}