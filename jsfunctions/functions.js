//Low
//1 , 2 , 3 , 4 ,5 y 6
let funcion = function (saludo, resultado){
    let number1 = 100
    let number2 = 20
    console.log(saludo+ "" + resultado+ number1 *number2);
    return saludo+ " " + resultado+ number1 *number2
}


funcion("Hola! Soy Fernando y es mi primera funcion ","La operacion devuelve: ")



//Medium

//1 
function greet(name){
    console.log(`Saludos ${name} espero estes teniendo un buen dia`);
    return `Saludos ${name} espero estes teniendo un buen dia`
}
greet('Fernando')

//2
let numeros = function(num1,num2){
    let multiply = num1 * num2
    console.log(multiply);
    return multiply
}

numeros(3,2)

//3
function area(height, base){
    let triangleArea = (height * base) /2
    console.log(triangleArea);
    return triangleArea 
}

area(12,24)

//4
function perimeter(height,base,height2){
    let perimeter = height2 + height + base
    console.log(perimeter);
    return perimeter
}
perimeter(10,15,10)

//5
function totalCompra(price, ammount){
    let total

    if (ammount >= 20){
        total = ((ammount*price) - (ammount*price)* (20/100)) 
        console.log(`La compra con descuento queda en ${total}`);
        return `El total de la compra con un descuento de 20% aplicado es de: $${total}`
    }else if(cantidad >= 10){
        total = ((ammount*price) - (ammount*price)* (10/100))
        console.log(`La compra con descuento queda en ${total}`);
        return `El total de la compra con un descuento de 10% aplicado es de: $${total}`
    }else {
        total = ammount * price
        console.log(`La compra tiene un total de ${total}`);
        return `El total de la compra es de: $${total}`
    }
}

totalCompra(2000, 25)

//6
function isAnAdult(age){
    if(age >= 18){
        console.log('You are an adult');
        return 'You are an adult'
    }else{
        console.log('You are not an adult');
        return 'You are not an adult'
    }
}
isAnAdult(27)
isAnAdult(16)



//High
//1 
function taxes(aIncome){
    let taxesPayment
    if(aIncome <= 10000){
        taxesPayment = aIncome *0.10
        console.log(taxesPayment);
        return taxesPayment
    }else if(aIncome <= 20000){
        taxesPayment = aIncome *0.15
        console.log(taxesPayment);
        return taxesPayment
    }else {
        taxesPayment = aIncome *0.20
        console.log(taxesPayment);
        return taxesPayment
    }
}

taxes(8000)
taxes(14000)
taxes(30000)

//2
function days(day){
    if(day >= 1 && day<6){
        console.log("It's a business day");
        return "It's a business day"
    }else if(day>=6 && day<=7){
        console.log("It's the weekend");
        return "It's the weekend"
    }else{
        console.log('The number of the day doest is not correct');
        return 'The number of the day doest is not correct'
    }
}

days(4)
days(6)

//3
function personalInfo(name,lastName,age){
    if(name != '' && lastName != '' && age > 0){
        const person = {
            pName: name,
            pLastName: lastName,
            pAge: age
        }
        console.table(person);
    }else {
        console.log('Data can not be empty');
    }
}

let pname = prompt('Ingrese su nombre: ')
let lastName = prompt('Ingrese su apellido: ')
let age = Number(prompt('Ingrese su edad: '))

personalInfo(pname,lastName, age)


//4

function greet(name){
    return `Hello, my name is ${name}`
}
function calculateAge(birthYear,presetent){
    let age = presetent - birthYear
    return age
}

function present(fun,fun2){
    let presentation = `${fun} and my age is ${fun2}, is a placeure to meet you`
    console.log(presentation);
    return presentation
}

present(greet('Fernando'),calculateAge(1995,2023))