// var, let, const
// var = globally scoped
// Use let, const
// let = reassign values

let score;
score = 10;
console.log(score);

// Use const if not gonna change

const age = 10;
console.log(age);

// strings, numbers, boolean, Null, undefined, symbol

const name = 'John';
const number = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; //undefined as well

// to test type

console.log(typeof name);

// strings

const named = 'Jack';
const aged = 30;

// concatenation
console.log('My name is ' + named + ' and I am ' + aged);

// template string 
const hello = (`My name is ${named} and I am ${aged}`)
console.log(hello);

// property and method()

const s = 'Hello World!';
const tags = 'tech, comp, it, code';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0,5));
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));
console.log(tags.split(', '));

// arrays - varaibles that hold multiple values

// uncommon
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits);
console.log(fruits[1]);

fruits[3]='grapes'; // add to this index
fruits.push('mangos'); // add to the end
fruits.unshift('strawberries'); // add to the start
fruits.pop(); // takes the last one off, so mangos
console.log(Array.isArray(fruits)); // checks if array
console.log(fruits.indexOf('oranges')); // finds value at that index
console.log(fruits);

// object literals

const person = {
    firstName: 'Joe',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);


const{ firstName, lastName, address: { city } } = person; // destructuring 

console.log(firstName);
console.log(city);

person.email = 'john@gmail.com' // can directly add elements

console.log(person);

// arrays of objects

const todos = [
    {
        id:1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id:2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos);
console.log(todos[1].text);

// json - fullstack & APIs 
// convert to JSON in script

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// loops

// for

for (let i = 0; i < 10; i++) {
    console.log(`For Loop Number: ${i}`);
}

for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

// while

let i = 0;
while (i < 10){
    console.log(`While Loop Number: ${i}`);
    i++;
}

// for of

for (let todo of todos){
    console.log(todo.id);
}

// High order array methods: forEach, map, filter

// forEach

todos.forEach(function(todo){
    console.log(todo.text);
});

// map

const todoText = todos.map(function(todo){
    return todo.text;
});

console.log(todoText);

// filter

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});

console.log(todoCompleted);

// conditionals

const n = 9;
const m = 10;

// === matches data type, == matches value
if (n === 10 || m > 10) {
    console.log('n is 10');
}
else if(n > 10){
    console.log('x is greater than 10');
}
else{
    console.log('n is less than 10');
}

// turnary operator, ?  = then, : = else

const t = 10;
const color = t > 10 ? 'red' : 'blue';

console.log(color);

// switches

const r = 11;
const color1 = r > 10 ? 'red' : 'blue';

switch(color1) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
}

// functions

// default values are set, if user does not provide the parameters when calling the function
function addNums(num1 = 1, num2 = 2) {
    return num1 + num2;
}

console.log(addNums(2,2));
console.log(addNums());

// Arrow function (has this)
// one line of code doesn't need curly braces or return, and can all be on one line
const addNumbers = (num1 = 1, num2 = 2) => num1 + num2;
const valueAdd = num1 => num1 + 5;

console.log(addNumbers());
console.log(valueAdd(5));

todos.forEach((todo) => console.log(todo));

// Constructor function with prototypes, OOP with ESS 5

function Persona(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Persona.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
}

Persona.prototype.getFullName = function (){
    // return this.firstName + ' ' + this.lastName;
    return `${this.firstName} ${this.lastName}`;
}

// instantiate object

const persona1 = new Persona('Kanye', 'West', '5-23-1980');
const persona2 = new Persona('Kendrick', 'Lamar', '6-5-1990');

console.log(persona1);
console.log(persona1.dob.getFullYear());
console.log(persona1.getBirthYear());
console.log(persona1.getFullName());

// Class OOP

class Persone {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName() { 
        return `${this.firstName} ${this.lastName}`;
    }
}

persone1 = new Persone('Marshal', 'Mathers', '5-23-1970');
console.log(persone1);

// dom / document object model
// ON main.js ^^
