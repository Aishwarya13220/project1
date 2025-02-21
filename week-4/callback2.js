
function addNumbers(a, b, callback) {
    const sum = a * b;
    callback(sum); 
}
function subnumbers(a,b,callback){
    const sub = a-b;
    callback(sub);
}

function displayResult(result) {
    console.log("The result of the addition is:", result);
    console.log("the result of the subraction is:",result);
}

addNumbers(100,234,displayResult);
subnumbers(123,637,displayResult);

