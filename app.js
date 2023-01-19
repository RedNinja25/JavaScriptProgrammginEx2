/*
    Author: Davis Cordeiro
    Desc: Working with Strings
    Date: 01/17/2023
*/

let l = "~~~~~~~~~~~~~~~~~~~~~~~~";

console.log(l);

let firstName = "Davis";
let lastName = "Cordeiro";
let age = 19;

// Concatenation
let messageConcat = 'My name is ' + firstName + ' ' + lastName + ' and my age is ' + age + '.';
console.log(messageConcat);
console.log(l);

let messageStringLit = `My name is ${firstName} ${lastName} and my age is ${age}.`
console.log(messageStringLit);
console.log(l);

console.log(messageStringLit.length);
console.log(l);

let a = "Add a new line\n\nThis is another line";
console.log(a);
console.log(l);

let b = "I quoted a person saying \"I love Java Script\"."
console.log(b);
console.log(l);

// New Line and Escape Character

let c = "It\'s right over there. over where? Over There!!!"
console.log(c);
console.log(l);

let d = 'I quoted a person saying "I love Java Script".'
console.log(b);
console.log(l);

let e = "It's right over there. over where? Over There!!!"
console.log(c);
console.log(l);

let abc = `It's right over there. I quoted a person saying "I love Java Script".`;
console.log(abc);
console.log(l);

console.log('String Functions & Properties');
let f = 'abcdefg';

console.log(`The length of variable f is ${f.length}`);
console.log(l);

console.log(f.toUpperCase());
console.log(f);
console.log(l);

f = f.toUpperCase();
console.log(f);
console.log(f.toLowerCase());

let g = f.substr(2,4)
console.log(g);

// substring()
let h = f.substring(3,6)
console.log(h);

console.log(f.substring(3));

let index = f.indexOf('C');
console.log(index);