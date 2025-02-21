
const numbers = [1, 2, 3, 4, 5];


const [first, second, third] = numbers;

console.log(first);  
console.log(second); 
console.log(third);  


const [,, fourth] = numbers;
console.log(fourth); 


const [a, b, c = 100] = [10, 20];
console.log(a); 
console.log(b); 
console.log(c);

