let fruits = ["apple","banana","orange","pine apple"];
// console.log(fruits[0]);
document.getElementById("elementIndex").innerHTML = "2nd element in the array Fruits =" + fruits[1];

// find the length of the array
// console.log("the total elements in the fruits = ",fruits.length)
// console.log(fruits[fruits.length -1]);

//push method will add the element at the end of the array
// console.log(fruits)
// fruits.push("grapes");
// fruits.push('madhu')
// console.log(fruits)
// console.log("last element in the array",fruits[fruits.length -1]);

//pop method will remove the element in the array from end
// console.log(fruits)
// fruits.pop();
// fruits.pop();
// fruits.pop();
// fruits.pop();
// console.log(fruits.pop())
// console.log(fruits)

// shift method will shift the first element from  the array(remove)

// console.log(fruits);
// fruits.shift();
// console.log(fruits)
// fruits.shift();
// console.log(fruits)
// fruits.shift();
// console.log(fruits)

//unshift method will add the elements from starting of an array

// console.log(fruits);
// fruits.unshift("grapes")
// console.log(fruits)

let bookName = "js";

//typeof will show object for arrays,
//  we need to use Array.isArry() method to find it is array or not 
// console.log(typeof fruits);
// console.log(Array.isArray(fruits))
// console.log(Array.isArray(bookName))

// converting arrays to strings
// console.log(fruits)
// console.log(fruits.toString());

// console.log(fruits.join(" $ "));

// document.getElementById("elementIndex").innerHTML = fruits.join("<hr />") + "here";

// let five = "5";
// let six = 6;
// console.log(five + six);
// let six = 6;
// let seven = 7;
// let eight = 8;
// let five = "5";

// console.log(six + seven + eight + five);

// const vegetables = ["onion","carrot","tomato"];
// console.log(fruits + vegetables)
// console.log((fruits + vegetables).split(","))
// console.log(fruits.concat(vegetables))

//splice method

// console.log(fruits);
// fruits.splice(2,0,"strawberry","mango");
// console.log(fruits)
// fruits.splice(2,1,"strawberry","mango");
// console.log(fruits)
// fruits.splice(2,2,"strawberry","mango");
// console.log(fruits)

//slice method removes part of an array

// console.log(fruits);
// fruits.push("blueberry","papaya","watermelon","dragon fruit", "kiwi");
// console.log(fruits)
// console.log(fruits.slice(2,5))

// console.log(fruits);
// console.log(fruits.sort());
// console.log(fruits.reverse());

// let firstName = "shiva"

// console.log(firstName.split("").reverse().join(""));

// Date Methos

// present data
const time = new Date();
// console.log(time);
// console.log(time.getHours());
// console.log(time.getMinutes());
// console.log(time.getSeconds());
// console.log(time.getDate());
// console.log(time.getDay());
// console.log(time.getMonth());
// console.log(time.getMilliseconds())

// console.log(time.setFullYear(2000,5,26));
// console.log(time.setDate(23));
// console.log(Date.now())

// number methods

// console.log(Math.round(4.6));
// console.log(Math.round(4.2));
// console.log(Math.round(4.5));

// console.log(Math.ceil(4.7));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.7));
// console.log(Math.floor(4.1));

// console.log(Math.pow(2,4));
// console.log(2**5);
// console.log(Math.sqrt(64));
// console.log(Math.max(1,4,3,46,34,23,646,32,535,33));
// console.log(Math.min(1,4,3,46,34,23,646,32,535,33));

// let diceNumber = Math.random() * 6;

// console.log(Math.floor(diceNumber) + 1)

// Booleans
// console.log(!(10>91))

// let bool = true;
// console.log(bool)

// let firstNumber = window.prompt("enter the value of first Number");
// let secondNumber = window.prompt("enter the second number")

// console.log(firstNumber,secondNumber)

// if condition
// if (firstNumber > secondNumber){
//   console.log("The value of 10 is greater than 9")
// }

// if else
// if(firstNumber>secondNumber){
//   console.log("The value of "+ firstNumber +  "is greater than " + secondNumber)
// } else {
//   console.log("the value of" + firstNumber + "is lessthan " + secondNumber)
// }

//else if
// if(firstNumber > secondNumber){
//   console.log(firstNumber + "greater")
// } else if(firstNumber < secondNumber){
//   console.log(firstNumber + "lesser")
// } else {
//   console.log("both are equal")
// }

// let x = window.prompt("enter date");
// x = Number(x);
// console.log("entered date", typeof x);
let holidayName;

// switch("light"){
//   case 5:
//   holidayName = "teachers day";
//   break;
//   case 14: holidayName = "childrens day";
//   break;
//   case 15: holidayName = "independence day";
//   break;
//   case 14: holidayName = "good friday";
//   case "fan" :
//     console.log("turn on the fan")
//   break;
//   default : holidayName = "No Holiday"
// }
// console.log(holidayName)

//doubts

// let x = 10;
// let y = "10";

// console.log(x = y);  // single equal to means assigning a value
// console.log(x == y);  // double equal to compares values
// console.log(x === y);  // triple equal to compares both values and types

// console.log("my name is \"john\" name");
// console.log("It's alright");

// let firstPerson = "madhu";
// let secondPerson = "vishnu";

// console.log(firstPerson + " " + "and" + " " + secondPerson  + "are friends");
// console.log(`${firstPerson} and ${secondPerson} are friends`);

//for loop

// for( let i = 5 ; i <= 10; i++){
//   if(i % 2 !== 0){
//   console.log("the value of i =", i);
//   }
// }

// console.log("the value of i outside block", i);

// while loop

// let i = 5;
// while( i < 10){
//   console.log(i);
//   i++
// }

//do while
// let i = 1;
// do{
//   console.log(i);
//   i++;
// } while( i < 10)

// do{
//   var i = window.prompt("enter a number not betwenn 50 and 75");
// } while( i > 50 && i < 75)

// do{
//   var i = window.prompt("enter your age")
// } while( i < 18);

// console.log(i)

console.log(fruits);

// for(let i = 0 ; i< fruits.length; i++){
//   console.log(fruits[i])
// }

// for(let i = 0 ; i< fruits.length; i++){
//   if(fruits[i] == "orange"){
//     console.log(i);
//   }
// }

// for(let i = 1; i < 10;i++ ){
//     if(i == 5){
//       continue;
//     }
//     console.log(i)
// }

// for(let i = 1; i < 10;i++ ){
//   if(i == 5){
//     continue;
//   }
//   console.log(i)
// }
fruits.push("kiwi")

// for of loop

// for(const item of fruits){
//     console.log(item)
// }

// console.log("--------")

// for(let i = 0 ;i < fruits.length; i++){
//   console.log(fruits[i])
// }

// const numbers = new Set([1,2,3,4,3,5,3,1,2,3,1,2,3,67,84,35,3]);
// console.log(numbers);

// const studentNames = ["vishnu", "shiva", "madhu", "shiva","madhu","venky","Ram"]

// const names = new Set(studentNames);
// console.log(names,"student names")

