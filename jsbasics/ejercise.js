//Basic
let myName = 'Fernando'
console.log(myName);

let myLastName = 'Juarez';
let myAge = 28;
let myPet = 'Ibby';
let petAge = 2;

let fullName = myName + ' ' + myLastName;
let presentationText = `Hola! Soy ${myName} ${myLastName}, tengo ${myAge} años\nMi mascota se llama ${myPet} y tiene ${petAge} añitos`

console.log(presentationText);


//Medium
let sumAges, subtractAges, productAges, divisionAges;

sumAges = myAge + petAge;
subtractAges = myAge - petAge;
productAges = myAge * petAge;
divisionAges = myAge / petAge;



const student = {
    name: 'Fernando',
    lastName:'Juárez',
    address: {
        street:'Fake Street 123',
        neighborhood:'Danger place 456',
        city:'La Banda'
    },
    age: 27,
    profession: 'Student'
}

console.table(student)
console.log(student.name);
console.log(student.lastName);
console.table(student.address);
console.log(student.age);
console.log(student.profession);


const pet ={
    name:'Ibby',
    age:2,
    color:'Golden Brown',
    hobby:'Run, run a lot',
    preferredFood:'bread'
}

console.table(pet);
console.log(pet.name);
console.log(pet.age);
console.log(pet.color);
console.log(pet.hobby);
console.log(pet.preferredFood);

const fruits = ['apple','orange','strawberry','cherry','banana']
console.table(fruits)

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);


//High
let inputAge = Number(prompt('Ingrese su edad: '))

if(inputAge >= 18){
    console.log('I am an adult');
}

const numbers = [10,12,45,26,95]
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);

const family = [
    {
        rol:'Dad',
        age: 55,
        name:'Bob'
    },
    {
        rol:'Mom',
        age: 54,
        name:'Melanie'
    },
    {
        rol:'dog',
        age: 4,
        name:'Tobby'
    },
    {
        rol:'son',
        age: 15,
        name:'Matew'
    },
    {
        rol:'cat',
        age: 2,
        name:'Peter'
    }
]
console.log(family[0]);
console.log(family[1]);
console.log(family[2]);
console.log(family[3]);
console.log(family[4]);


let randomText = `${fruits[1]} ${numbers[3]} ${family[4].rol}`
console.log(randomText);