let x = 5;

//Arithmatic operator 
console.log("Addition: x + 3 = ", x + 3);
console.log("Subtraction: x - 3 =", x - 3);
console.log("Multiplication: x * 3 =", x * 3);
console.log("Division: x / 3 =", x / 3);
console.log("Remainder: x % 3 =", x % 3);
console.log("Increment: ++x =", ++x);


// assignment operator
let a = 7;
console.log("Assignment:", a);

a += 5;  // a = a + 5
console.log("Addition Assignment:", a);

a -= 5;  // a = a - 5
console.log("Subtraction Assignment:", a);

a *= 2;  // a = a * 2
console.log("Multiplication Assignment:", a);

a /= 2;  // a = a / 2
console.log("Division Assignment:", a);


//Comparison operator
console.log("Equal to: 2 == 2 is", 2 == 2);
console.log("Not equal to: 3 != 3 is", 3 != 3);
console.log("Strictly not equal to: 2 !== '2' is", 2 !== '2');
console.log("Greater than: 3 > 3 is", 3 > 3);
console.log("Less than: 2 > 2 is", 2 > 2);
console.log("Greater than or equal to: 3 >= 3 is", 3 >= 3);
console.log("Less than or equal to: 2 <= 2 is", 2 <= 2);


//Logical Operators
let v = 3;
// logical AND
console.log((v < 5) && (v > 0));  // true
console.log((v < 5) && (v > 6));  // false

// logical OR
console.log((v > 2) || (v > 5));  // true
console.log((v > 3) || (v < 0));  // false

// logical NOT
console.log(!(v == 3));  // false
console.log(!(v < 2));  // true