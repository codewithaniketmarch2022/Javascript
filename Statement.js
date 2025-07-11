
//if statement
let a = 20;

if (a > 18){
console.log("Congratulations, You are eligible to drive");
}

//if-else statement
if (a < 15)
    console.log("this is right");
else
    console.log("not right");

//if-else if-else statement

if (a == 10)
    console.log("a is 10");
else if (a == 15)
    console.log("a is 15");
else if (a == 20)
    console.log("a is 20");
else
    console.log("a is not present");

//nested if statement
if (a == 20) {  // First if statement
    if (a < 25) {
        console.log("a is smaller than 50");
      
        if (a < 12)
            console.log("a is smaller than 12 too");
        else
            console.log("a is greater than 15");
    }
}

//Switch statement
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName);