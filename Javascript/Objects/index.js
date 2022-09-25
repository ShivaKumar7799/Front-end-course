// const employee1 = {
//   firstName : "Vishnu",         // properties and values
//   lastName : "vardhan",
//   age : 27,
//   city : "hyderabad"
// }

// const employee2 = {
//   firstName : "Madhu",
//   lastName : "sudhan",
//   age : 36,
//   city : "Dubai"
// }

// console.log(employee1.firstName);
// console.log(employee1.age);

// console.log(employee2.age);
// console.log(employee2.city);
// console.log(employee1)

// employee1.salary = 50000;  // adding property to object
// employee1.attendance = "25days";

// console.log(employee1.city)  // accessing properties in object

// employee1["married"] = "unmarried"

//  employee1.honestyPerson = true;
//  employee1.fruitsLiked = ["apple", "orange","grapes"];
//  employee1.address = {
//     streetNo : 7,
//     buildingNumber : 123,
//     area : "sanath nagar",
//     village : "hyderabad"
//  }
//  console.log(employee1.address.village);

//  employee1.addFunction = function(a,b){
//       return a+b;
//  }

//  console.log(employee1.addFunction(2,8))

// console.log(employee1.fruitsLiked[1])

// document.getElementById("object").innerHTML = JSON.stringify(employee1);

// const person = {
//   firstName : "Madhu",
//   lastName : "Sudhan",
//   fullName : function(fName,lName){
//       return fName + " " + lName
//   }
// }

// console.log(person.fullName("ma","su"))

// const person = {
//   firstName : "Vishnu",
//   lastName : "Vardhan",
//   fullName : function() {
//     return this.firstName + " " + this.lastName
//   }
// }

// const person = {
//   firstName : "Vishnu",
//   lastName : "Vardhan",
//   fullName : () => {
//     return this
//   }
// }

// console.log(person.fullName());

// create object using new keyword

function Person(firstName, lastName, age, city){
  this.fname = firstName;
  this.lname = lastName;
  this.age = age;
  this.city = city;
}

const employee1 = new Person("shiva","kumar",25,"vizag");
const employee2 = new Person("vishnu","vardhan", 27, "hyderabad")
const employee3 = new Person("madhu","sudhan",28,"dubai");

console.log(employee1.age)

// console.log(shiva)

// console.log(shiva.city)
// console.log(vishnu.city)
// console.log(madhu.city)

// console.log(shiva.lname);

// const shiva2 = shiva;  //if we copy objects directly it will effecct both

// shiva2.fname = "abcd"

// console.log(shiva2.fname);
// console.log(shiva.fname)