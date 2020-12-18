//3
let message = 'Coding is great';
let studentCount = 0;
console.log(message);
console.log(studentCount);
//4
message = 'Coding might not easy, but still great';
studentCount = 19;
console.log(message);
console.log(studentCount);
a = message.toLowerCase();
b = ++studentCount;
console.log(a);
console.log(b);

//5
alert("You look beautiful today");
//6

let Name = prompt("Hi there, what is your name?:");
alert('Hi '+ Name);
//7
firstName = prompt("Enter your first name: ");
lastName = prompt("Enter your last name: ");
alert('Hi '+firstName+' '+lastName);
//8
square = prompt("Enter side length of the square: ");
alert(`The square area is ${square*square}`);
//9
radius = prompt("Enter the radius of the circle: ");
const pi = 3.14;
alert(`The circle area is ${pi*radius*radius}`);
//10
tempC = prompt("Enter the temperature in Celcius: ");
tempF = (tempC * 9/5) + 32;
alert( tempC+'(C) = '+tempF+'(F)');
