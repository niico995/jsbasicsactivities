//Low
//1 y 2
let num1 = 4;
let num2 = 5;

if(num1 > num2){
    console.log('Numer One is the biggest');
}else if(num2 > num1){
    console.log('Number Two is the big one');
}else {
    console.log('Son iguales!!');
}

//3 
if(num1 == num2){
    console.log('The numbers are equal');
}else{
    console.log('The numbers are different');
}
//4
let date1 = '2018-9-2'
let date2 = '2023-7-5'

if(date1 > date2){
    console.log(`The date ${date1} is greater than ${date2}`);
}else if(date2 > date1){
    console.log(`The date ${date2} is greater than ${date1}`);
}else{
    console.log('The dates are the same');
}
//5
let date3 = '2020-15-3'
let date4 = '1943-3-2'

if(date3 > date4){
    console.log(`The date ${date3} is greater than ${date4}`);
}else if(date2 > date1){
    console.log(`The date ${date3} is greater than ${date4}`);
}else{
    console.log('The dates are the same');
}


//6
let number1 = 5
let number2 = 7
let number3 = 9


if(number1 > number2 && number1 > number3){
    console.log(`The number ${number1} is the largest`);
}else if(number2 > number1 && number2 > number3){
    console.log(`The number ${number2} is the largest`);
}else if(number3 > number1 && number3 > number2){
    console.log(`The number ${number3} is the largest`);
}else {
    console.log('The numbers are the same');
}


//Medium

//1
let color = prompt ("Ingrese un color: rojo, verde, azul")
console.log(color)

color = color.toUpperCase()

switch (color) {
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

//2
let numOne = Number(prompt('Insert the first number: '))
let numTwo = Number(prompt('Insert the second number: ')) 

let operation = prompt('Insert the operation to do: sum / substract / multiply / division')

switch(operation){
    case 'sum':
        let sum = numOne + numTwo
        console.log(sum);
        break;
    case 'substract':
        let substract = numOne - numTwo
        console.log(substract);
        break;
    case 'multiply':
        let multiply = numOne * numTwo
        console.log(multiply);
        break;
    case 'division':
        let division;
        if(numOne > numTwo){
            division = numOne / numTwo
            console.log(division);
            break;
        }else if(numTwo > numOne) {
            division = `Changed the order of the numbers because ${numTwo} is biggest than ${numOne} and the result is ${numTwo/numOne}`
            console.log(division);
            break;
        }else {
            division = 'Are the same numbers is equal to 1'
            console.log(division);
            break;
        }
    default:
        console.log('Operation out of the list admited');
        break;
}


//Ejercicio 3
const person1 = {
    name: 'Luz',
    age: 26,
    height: 1.65
}

const person2 = {
    name: 'Juan',
    age: 39,
    height: 1.69
}


if(person1.height > person2.height && person1.age > person2.age){
    console.log(`${person1.name} is taller and older than ${person2.name}`);
}else {
    console.log(`${person2.name} is taller and older than ${person1.name}`);
}


//4

const personData = [];

let name = prompt('Please let me know your name: ')
let age = Number(prompt('let me know your age: '))
let height = Number(prompt('let me know your height (in cm): '))
let vision = Number(prompt('and your vision is? (range 1 to 10) '))

personData.push(name,age, height,vision)

if(personData[1] > 18 && personData[2] > 110 && personData[3] >= 8 ){
    console.log('You are qualified to drive');
}else {
    console.log('You are no allowed to drive, sorry');
}

//5 
let ageToManage = Number(prompt('Your age is... ? '))
console.log(ageToManage);



if(ageToManage >=0 && ageToManage <= 12){
    console.log('Infant');
    alert('Infant')
}else if(ageToManage >=13 && ageToManage <= 18){
    console.log('Adolescent');
    alert('Adolescent')
}else if(ageToManage >=19 && ageToManage <= 45){
    console.log('Older Young');
    alert('Older Young')
}else if(ageToManage >=45 && ageToManage <= 100){
    console.log('Elderly');
    alert('Elderyl')
}else if(ageToManage > 100){
    console.log('Is he really that old??');
    alert('Is he really that old??')
}else{
    console.log('Edad en rango invalido');
    alert('Edad en rango invalido')
}


//6
let firstValue = prompt('Ingrese un valor entre 1 y 3 ')

if (firstValue >=1 && firstValue <=3){
    alert(`The number entered is [${firstValue}]`);
    alert(`Twice the number entered is [${firstValue*2}]`);
    alert(`Three times the number entered is [${firstValue*3}]`);
}else {
    alert('That value is not allowed')
}



//High
let customerName = prompt('Ingrese su nombre: ')
let customerPass = prompt('Esta en la lista VIP? / VIP o normal')
let customerEntrance = prompt('Posee entrada? si o no')


if(customerName == 'Fernando' || customerPass == 'VIP'){
    alert('Wellcome!')
}else if(customerEntrance == 'si'){
    alert('Wellcome!')
}else {
    let decision = prompt('Do you want to buy a ticket?')
    if(decision == 'si'){
        let money = prompt('How much money do you have?')
        if(money > 1000) {
            alert('Wellcome !')
        }else{
            alert("Can't buy the ticket")
        }
    }else{
        alert('Good luck, bye!')
    }
}


