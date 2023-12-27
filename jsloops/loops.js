//Easy
//1
let number = Number(prompt('Ingrese su valor: '))

for(let i =1;i<=number;i++){
    console.log(i)
}

//2
let number1 = Number(prompt('Ingrese su valor multiplicador: '))
for(let i =1;i <=10;i++){
    console.log(`${i}x${number1} = ${i*number1}`)
}

//3
let sum = 0
let bandera = true


while(bandera){
    let num1 = Number(prompt('Ingrese su valor a sumar: '))
    
    if(num1 != 0 ){
        sum += num1 
    }else {
        bandera = false
    }

}

console.log(sum)


//4
let suma = 0
let b = true
let num2 

do {
    num2 = Number(prompt('Ingrese un valor a sumar, para finalizar oprima 0'))
    if(num2 != 0 ){
        suma += num2 
    }else {
        b = false
    }
}while(b)
    
console.log(suma)


//5
const person ={
    name: 'Fernando',
    lastName: 'Juarez',
    age: 28,
    origin: 'La Banda',
    studies: 'Software Developer'
}

for(const keys in person){
    console.log(keys)
}

for(let keys in person){
    console.log(person[keys])
}


//Medium

//1 
let secret = sum
let ingreso
let cont = 0

do{
    ingreso = Number(prompt('Ingrese la contraseña secreta: '))
    if(ingreso>secret){
        cont +=1
        alert('El número es mayor a la contraseña')
    }else if(ingreso<secret){
        cont +=1
        alert('El número es menor a la contraseña')
    }else {
        alert(`Lo lograste! El número secreto era ${secret} y has intentado ${cont} veces`)
        
    }

}while(ingreso != secret)


//2
let toDivide = Number(prompt('Ingrese el numero a determinar divisores: '))

for(let i = 1; i<=toDivide;i++){
    if(toDivide%i==0){
        console.log(i)
    }
}

//3
function ringBell(times){
    for(let i=1;i<=times;i++){
        console.log('Ding Dong ')
    }
}

ringBell(5)

//4
const dateLimit = '1997-8-3'
const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]

for(date of dates){
    if(date > dateLimit){
        console.log(`greater ${date}`)
    }else if(date == dateLimit){
        console.log(`equal ${date}`)
    }
}

//5 y 6
const colors = ['red','green','blue','violet','brown','black']

function colorList(list){
    for(let color of list){
        console.log(`° ${color}\n`)
    }
}

colorList(colors)

//7
const numbers = [1,2,3,4,5]

for(let number of numbers){
    console.log(`The number is ${number} and its double is ${number*2}\n`)
}

//8
const personitas= [
    {
        name: 'luz',
        lastName: 'mieres',
        age: 26
    },
    {
        name: 'dalma',
        lastName:'romero',
        age:30
    },
    {
        name:'juan',
        lastName:'faella',
        age:23
    },
    {
        name:'fernando',
        lastName:'juarez',
        age:28
    }
]

for(const person of personitas){
    console.log(`Hello, I am ${person.name} ${person.lastName} and I am ${person.age} years old.\n`)
}

//High
//1
let sumpares = 0
let sumimpares = 0

let ban = true

do {
    let numerito = Number(prompt('Ingrese su valor: '))
    if(numerito != 0){
        if(numerito%2==0){
            sumpares += numerito
        }else {
            sumimpares += numerito
        }
    }else {
        ban = false
    }
}while(ban)

console.log(`Números pares: ${sumpares}\nNúmeros impares: ${sumimpares}`)

//2 
const listado = [1,2,3,4,25,6,7,8,12,10]
let aux = listado[0]

for(let i=0; i< listado.length;i++){
    if(aux< listado[i]){
        aux = listado[i]
    }
}

console.log(aux)