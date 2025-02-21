
function Person(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}


Person.prototype.fullname = function() {
    return this.fname + " " + this.lname;
};


let P1 = new Person("abc", "A");
let P2 = new Person("cvr", "A");


console.log(P1.fullname()); 
console.log(P2.fullname()); 



