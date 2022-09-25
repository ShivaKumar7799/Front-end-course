// const pow = Math.pow(2,5);
// console.log(Math.pow(2,5))

// let age = 18;

// age > 18 ? console.log("eligible to vote") : console.log('not eligible to vote')

// (function(){
//   console.log("self invoke")
// })()
// (function(name){
//   console.log("Hello " +  name + ", Welcome to my Page")
// })("shiva")

// function addition(a,b){
//     console.log("In addition function called");
//     // console.log(a + b)
//     return a + b;
// }
// console.log("before addition function called")
// let addTwoAndFour = addition(2,4)
// console.log(addTwoAndFour)
// addition(4,5)
// addition(34,56)
// addition(23,6)
// console.log("after addition function called")

//arrow functions

// const fullName = (fname,lname) => {
//   console.log(`your fullName is ${fname} ${lname}`)
// }
// fullName("shiva","kumar")

// const person = {}
// person.firstName = "shiva";
// person.age = 26;
// person.age = 25;
// person.city = "visakhapatnam"
// console.log(person);

// for(x in person){
//   console.log(x, person[x])
// }

// let fruits = ["apple","pineapple","banana"];

// for(y of fruits){
//   console.log(y)
// // }


// const madhu = {
//   height : 5.8,
//   weight : 60,
//   colour : "white",
//   eyeColour : "blue"
// }
// delete madhu.weight;

// madhu.profession = "developer";
// console.log(madhu)

// for(x in madhu){
//   console.log(x, madhu[x])
// }

// function Person(height,weight,colour,eyeColour){
//   this.height = height,
//   this.weight = weight,
//   this.colour = colour,
//   this.eyeColour = eyeColour
// }

// const madhu = new Person(5.8,60,"fair","black");
// const vishnu = new Person(5.7,55,"white","blue")
// console.log(madhu);
// console.log(vishnu)


// Object creation using new keyword

// function FullName(fname,lname){
//   this.firstName = fname;
//   this.lastName = lname;
// }

// const myName = new FullName("shiva","kumar")
// console.log(myName)

//call method in function

// const person = {
//   firstName : "shiva fname",
//   lastName : "shiva lname",
//   fullName : function(city,country){
//     return this.firstName + this.lastName 
//   }
// }

// const person1 = {
//   firstName : "shiva",
//   lastName : "kumar",
// }
// const person2 = {
//   firstName : "Madhu",
//   lastName : "Sudhan",
// }
// const person3 = {
//   firstName : "Vishnu",
//   lastName : "Vardhan"
// }
// console.log(person.fullName.call(person1,"visakhapatnam","india"))
// console.log(person.fullName.call(person2,"nellore","australia"))
// console.log(person.fullName.call(person3,"hyderabad","u.k"))

//apply method
// let array = ["visakhapatnam","india"]
// console.log(person.fullName.apply(person3,array))

// console.log(person.fullName.bind(person2)())

// const student = {
//   firstName : "shiva",
//   fullName : function() {
//     return this.firstName;
//   }
// }
// const member = {
//   firstName: "shiva kumar"
// }
// console.log(student.fullName.bind(member)())

//higher order function

// function which accepts function as an argument or return a function

// function calculate(a,b,operandFunc){
//    let result = operandFunc(a,b)
//    return result
// }

// function addFunc(a,b){
//   return a+b
// }

// function subFunc(a,b){
//   return a-b;
// }
// console.log(calculate(10,20,addFunc))

// console.log(calculate(10,20,subFunc));

// console.log(calculate(3,5,addFunc))

// console.log(calculate(3,8,subFunc))

// console.log(calculate(3,4, mul),"multi")
// console.log(calculate(100,50,div),"div")

// function mul(a,b){
//   return a*b
// }
// function div(a,b){
//   return a/b;
// }

// console.log(mul(4,5))
// console.log(div(10,20))


// const madhu = {
//   firstName : "madhu",
//   lastName : "sudhan"
// }
// let vishnu = madhu

// vishnu.firstName = "vishnu"
// vishnu.lastName = "vardhan"
// madhu.firstName = "madhu"

// console.log(madhu,"madhu")
// console.log(vishnu,"vishnu")

