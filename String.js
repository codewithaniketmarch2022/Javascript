
//In JavaScript String is a sequence of characters, typically used to represent text.
//1.Create using Literals
// Using Single Quote
let s1 = 'aniket';
console.log(s1);

// Using Double Quote
let s2 = "pankaj";
console.log(s2);

//2.Create using Constructor
let s = new String('amar');
console.log(s);

//substring() mehod in javascript- returns the part of the given string from the start index to the end index. Indexing starts from zero (0).
let str = "mumbai, pune, Satara";
let part = str.substring(6, 12);
console.log(part);

//replace() method -part of the given string with another string or a regular expression. The original string will remain unchanged.
let str1 = "mumbai, pune, Satara";
let part1 = str1.replace("pune", "kolkatta");
console.log(part1);

//replaceAll() returns a new string after replacing all the matches of a string with a specified string or a regular expression. 
let str2 = "mumbai, pune, pune, Satara";
let part2 = str2.replaceAll("pune", "kolkatta");
console.log(part2);

//The trim() method is used to remove the whitespace from both sides of a string. It does not change the original string.
let str3= "    sunshinesunset     "; 
let part3 = str3.trim();
console.log(part3);

//join() -it converts array to string.......
let a = [1, 2, 3, 4, 5, 6];
let b = a.join();
console.log(b);

//split() method - it converts given string into array.....
let str4= 'India is our Country'
let part4 = str4.split(" ");
console.log(part4);

