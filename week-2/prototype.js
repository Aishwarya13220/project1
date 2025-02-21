const parent={
    greet:function(){
        console.log("hello from the parent object");
    }
};
const child=Object.create(parent);
child.sayhi=function(){
    console.log("hi from the parents child");
};
child.greet();
child.sayhi();

function Animal(name){
    this.name=name;
}
Animal.prototype.speak=function(){
    console.log("${this.name}makes sound");
};


