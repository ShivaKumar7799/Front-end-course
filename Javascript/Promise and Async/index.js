// Promises

// console.log("before js started")
// let a = 10; b = 20;
// let c = a+b;
// console.log(c);
// console.log('before function call');
// function sub(a,b){
//   console.log("sub func")
//   return a-b;
//   console.log("after return function")
// }
// console.log("before sub func call")
// sub(3,5)
// console.log("after function call");
// console.log("js code ended")


// console.log("1")
// fetch('https://jsonplaceholder.typicode.com/todos/1').then(item => item.json()).then(value => console.log(value)).catch(err => console.log(err,"ths is error"))
  // .then(response => response.json())
  // .then(json => console.log(json))
  
// console.log("2")

// //Promises
// let fname = "shivfa";
// let waiting = new Promise( function(myResolve, myReject){
//     if(fname == "shiva"){
//         myResolve("Promise is succeed")
//     } else {
//       myReject("Promise failed")
//     }
// } );

// waiting.then(
//   function(item){
//     console.log(item)
//   }
// ).catch(
//   (err) => console.log(err)
// )

// console.log("3")

// console.log("first")
// setTimeout(function(){
//   console.log('execute set time out')
// },170)
// console.log("second")
// fetch('https://jsonplaceholder.typicode.com/todos/1').then(item => item.json()).then(value => console.log(value)).catch(err => console.log(err,"ths is error"))
// console.log("third")
// let clearTime = setInterval(() => console.log("execute after"),1000)
// console.log('fourth')
// setTimeout( () => clearInterval(clearTime),1000)


//pass by value
// let madhufname = "madhu"
// let vishnufname = madhufname;
// console.log(vishnufname,"vishnufname")
// vishnufname = "vishnu"
// console.log(vishnufname);
// console.log(madhufname)

//pass by reference
// const madhu = {
//   fname : "madhu",
//   lname : "sudhan"
// }
// const vishnu = madhu
// console.log(vishnu,"vishnu");
// console.log(madhu,"madhu");
// vishnu.fname = "vishnu";
// console.log(vishnu,"vishnu");
// console.log(madhu,"madhu");


// copying objects in a correct way

// const vishnu = Object.assign({}, madhu)
// console.log(madhu);
// console.log(vishnu);
// vishnu.fname = "vishnu"
// console.log(madhu);
// console.log(vishnu);

// clousures

// let count = 0;
// function counterFunction(){
//     count += 1;
//     console.log(count)
// }
// counterFunction()
// counterFunction()
// counterFunction()
// counterFunction()
// count = 10000;
// counterFunction()
// counterFunction()
// counterFunction()

// function counterFunction(){
//   var count = 0;
//   count += 1;
//   console.log(count)
// }
// counterFunction()
// counterFunction()
// counterFunction()
// counterFunction()
// count = 20
// console.log(count)
// counterFunction()
// counterFunction()

// function counterFunction(){
//   var count = 0;
//   var fname = "madhu"
//   return function(){
//     count +=1;
//     console.log(count)
//   }
// }

// // lexical scope

// let newCount = counterFunction();
// console.log(newCount)
// newCount()
// newCount()
// newCount()
// newCount()
// newCount()

// function currying

function add(a){
  return function(b){
    return function(c){
      return a - b + c
    }
  }
}
// console.log(add(2)(7)(6))

const firstAdd = add(3)

console.log(add)
console.log(firstAdd)
const secondAdd = firstAdd(5)
console.log(secondAdd);

console.log(secondAdd(8))
console.log(firstAdd(5)(8))

console.log(add(1)(5)(8))
