
function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.speak = function() {
    console.log(this.name + ' makes a sound');
  };
  
  
  function Dog(name, breed) {
    Animal.call(this, name); 
    this.breed = breed;
  }
  
 
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  
  Dog.prototype.bark = function() {
    console.log(this.name + ' barks!');
  };
  
 
  const dog1 = new Dog('Buddy', 'Golden Retriever');
  const dog2 = new Dog('Max', 'Bulldog');
  
  dog1.speak();  
  dog1.bark();   
  
  dog2.speak();  
  dog2.bark();   
  