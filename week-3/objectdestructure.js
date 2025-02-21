
const person = {
    fname: "John",
    lname: "Doe",
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    }
};


const { fname, lname, age, address: { city, country } } = person;

console.log(fname);   
console.log(lname);   
console.log(age);     
console.log(city);    
console.log(country); 

let [fst, , ...last] = ["a", "b", "c", "d"];

console.log(fst);
console.log(last);