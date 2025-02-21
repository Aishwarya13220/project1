function Animal(name){
    this.name=name;
}
Animal.prototype.speak=function(){
    console.log('${this.name} makes sound');
};
const dog=new  Animal("buddy");
console.log(dog.name);
dog.speak();
