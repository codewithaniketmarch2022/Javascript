
function sum(x, y) { 
    return x + y; 
}
console.log(sum(6, 9));     // output: 15



// Calling Function
function welcomeMsg(name) {
    return ("Hello " + name + " welcome to HFP");
}
let nameVal = "aniket";
console.log(welcomeMsg(nameVal));  


//Function Expression(Aninyms expression)-It is similar to a function declaration without the function name. Function expressions can be stored in a variable assignment. 
const mul = function (x, y) {
    return x * y;
};
console.log(mul(4, 5));


//Arrow Functions
let add=(a,b)=>(a+b)
console.log(add(8,4));


//Arrow Functions without parameters
let cdac = () => {
    console.log( "Hello maharashtra....!" );
}
cdac();


//Function Scope
function check_function_scope(){
    var variable1 = "Health";
    let variable2 = "First";
    const variable3 = "Priority";
    console.log(variable1);
    console.log(variable2);
}
 check_function_scope();
//console.log(variable3);  //cannot access outside the block.....shows error


//Block scope
{   
    var variable_1 = "Aniket";
    const variable_2 = "nalavade";
    let x=2;
    x*=2;
    console.log(x);
    console.log(variable_2);
}
console.log(variable_1);  //variable with the var keyword because var does not have a block scope.



//Closures Function....(functions inside functions...)
function outer() {
    let outerVar = "I'm in the outer scope!";
    function inner() {
        console.log(outerVar); 
    }
    return inner;  
}
const closure = outer(); 
closure();



//callback Function
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}
function sayBye() {
    console.log("Goodbye!");
}
greet("Aniket", sayBye);
  
