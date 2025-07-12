// Creating an Empty Array
let a = [];
console.log(a);
// Creating an Array and Initializing with Values
let b = [10, 20, 30];
console.log(b);
console.log(b[2]);  //Array index start from 0 so on 2 storong value is 30


//For calculate a array length
let c = ["HTML", "CSS", "JS", "React"];
console.log(c.length);

//Map() in arrays - used for create a new arrays....
let arr = [2,3,4,5];
let arr1 = arr.map((element)=>{
     return element * element;
})
console.log(arr1);


//Filter() method creates a new array containing elements that satisfy a specified condition. 
let num = [1,2,3,4,5,6];
let evenNum = num.filter(isEven);
function isEven(element){
    return element%2==0;
}
console.log(evenNum);


//reduce() method - it reduce the elements of an array to a single value..
let price = [10,20,30,40];
let total = price.reduce(sum);
console.log(total);

function sum(accumulator, element){
    return accumulator + element ;
}


//forEach() - The forEach() method calls a function for each element in an array
let arr3 = [1, 2, 3, 4, 5];

arr3.forEach((item) => {
    console.log(item);
});
