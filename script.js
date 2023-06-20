// Q1. difference between '==' & '==='

// let a = "SHUBHAM";
// let b = "shubham";

// console.log(typeof(a));
// console.log(typeof(b));

// console.log(a == b); //
// console.log(a === b); // 

// Q2. What are the differences between var, let and const?

// Var
//  1. Redeclare and reinitilized

// var x = 10;
// var x = 20;  // Redeclare
x = 30;  // reinitilized

// Global scope and Function Scope

// var ABC = 10;
// let PQR = 20;
// const XYZ = 30;

// Function Scope
// function funcScope(){
//     var ABC = 100;
//     let PQR = 200;
//     const XYZ = 300;
//     console.log(ABC); // 100
//     console.log(PQR); // 200
//     console.log(XYZ); // 300
// }
// funcScope()

// console.log(ABC);
// console.log(PQR);
// console.log(XYZ);

// Block Scope if(){}, switch, loop

// {
//     var ABC = 100;
//     let PQR = 200;
//     const XYZ = 300;
//     console.log(ABC); // 100
//     console.log(PQR); // 200
//     console.log(XYZ); // 300
// }

// console.log(ABC);  // 100
// console.log(PQR); // not define - error
// console.log(XYZ); // not define - error


// console.log(a);
// var a = 10;

// // Abc();
// function Abc(){
//     console.log("Section!!!");
// }



// console.log(a);
// let a = 10;

// let P = function Sum(){
//     console.log("Hi");
//     return "Hello"
// }

// console.log(P());

// function Sum(a, b){
//     return a * b;
// }

// Sum(10, 20)
// Sum(20, 20)
// Sum(20, 30)


// HTML - 1 T, 1 I
// CSS - 2 T, 1 I
// JS -3 T, 2 I


// Spread Operator - Array

// const arr = [2,3,4,5,6,7,8,9];
// // for(let i = 0 ; i < arr.length ; i++){
    // //     console.log(arr[i]);
    // // }
    
    // console.log(...arr);
    // console.log(arr);
    // const arr2 = [...arr, ...arr1]
    // // console.log(arr2);
    
    
// // Spread Operator - Function

// const arr1 = [1,11, 12, 10]

// function Sum(a, b, c){
//     console.log(a, b, c);
//     return a + b + c;
// }

// console.log(Sum(...arr1));

// Spread Operator - Object

// const Obj1 = {
//     name : "Dabloo",
//     Age : 23
// }

// const Obj2 = {
//     Course : "MERN",
//     ...Obj1
// }

// console.log(Obj1);
// console.log(Obj2);


// Output
// function Display(){
//     let time = new Date();

//     let hr = time.toLocaleTimeString();

//     console.log(hr);
// }

// setInterval(() => {
//     Display();
// }, 2000);

// setTimeout(() => {
    
// }, 1000);

// Display();

// Callback function

// function greet(name, func){
//     console.log(`Hi ${name}`);

//     console.log(func());
// }

// function Sum(){
//     console.log("Hey....");
// }

// // greet('EA23', Sum())

// greet('EA23', Sum)

console.log(0/0);

var a=10;
var b="abc"
console.log(a - b)