function greetUser(name, callback) {
    setTimeout(function() {
        console.log(`Hello, ${name}!`);
        callback(); 
        }, 2000); }

        function afterGreeting() {
    console.log("This message comes after the greeting.");
}

greetUser("Alice", afterGreeting);
