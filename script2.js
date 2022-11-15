
//  let message = "ES6 Module";

//  function hello(name , age){
//     console.log(`my name is ${name} and age is ${age}`);
// }

//  class movie{
//     constructor(){
//         console.log('This is class')
//     }
// }

// export{message , hello , movie};






// let welcome = (name,age)=>{
//     return `name is ${name} and age is ${age}`;
// }
// console.log(welcome('ayu',26));

//rest

// function sum(name, course ,  ...args){
//     console.log(arguments);
//     document.write(`hello i'm  ${name} and i'm doing ${course}  : `);
//     let sum = 0;
//     for(let i in args){
//         sum += args[i];
//     }
//     document.write(sum + "<br>")
// }
// sum("ayu " , 'Btech ',20,30,40);
// sum('bobby' , " BCA" , 20*5);

// spread operator

// function sum(name , ...args){
//     console.log(arguments);

//     document.write(`Hello ${name} :`);

//     let sum = 0;
//     for(let i in args){
//         sum += args[i];
//     }
//     document.write(sum);
// }
// var arr = [10,20,30,40];
// sum('sardar khan' , ...arr);

// var arr1 = [10,20,30,40];
// var arr2 = [50,60];

// var arr3 = [5,...arr1 , ...arr2,78];
// console.log(arr3);

// var obj1 = {
//     name : "ayush yadav",
//     course : 'BCA'
// };

// var obj2 = {
//     age:25,
// };

// var obj3 = {...obj1, ...obj2};
// console.log(obj3);

// Object literals

// let name = 'fullstack';
// let course = 'Btech';

// let obj = {
//     name,
//     course
// };
// console.log(obj);

// let n = 'name';

// var obj = {
//     [n] : "yahoo baba",
//     courses : "BCA"
// }

// console.log(obj);
// console.log(obj.name);

// let name = "ayush yadav";
// let course = "BCA";

// function student(name , course){
//     return {name , course};
// }
// console.log(student(name, course));

// let fname = "yahoo";
// let lname = "baba";
// let course = "BCA";

// function student(fname , lname, course){
//     let fullName = fname + " " + lname;
//     return {fullName , course};
// }
// console.log(student(fname , lname ,  course));

//destructure

// let user = ["yahoo" , 23];
// let name = user[0];
// let age = user[1];
// console.log(name);
// console.log(age);

// let details = ['sardaar khan' ,35 , 'dhanbaad' ,['Male' , 'India'] ];
// let [name, ...args] = details;

// console.log(name);
// console.log(args);

// function user ([name , age , city]){
//     console.log(name);
//     console.log(age);
//     console.log(city);
// }

// user(['yahoo' , 23, 'delhi']);

//objects

// let user = {
//     name:"ayush",
//     age:34,
//     city : "delhi"
// }

// let {name : n, age: a , city:c} = user;

// console.log(n);
// console.log(a);
// console.log(c);

//oops

//class and object

// class hello{
//     message(){
//         console.log('hello everyone');
//     }
//     sorry(){
//         console.log('i am sorry');
//     }
// }

// let a = new hello();
// a.message();
// a.sorry();

// class student{
//     constructor(name , age){
//         this.studentname = name;
//         this.studentage = age;
//         console.log('constructor function');
//     }
//     hello(){
//         console.log(`hello ${this.studentname} your age is ${this.studentage}`);
//     }
//     static staticMethod (){
//         console.log('this is static Method;');
//     }
// }

// let a = new student('google' , 25);
// a.hello();
// student.staticMethod();

//inheritance

// class employee{
//     constructor(name){
//         console.log(`constructor : employees : ${name}`);
//     }
// }
// class manager extends employee{

// }

// let a = new employee('billy');
// let b = new manager('kk');

// class employee{
//     constructor(name){
//         this.empname = name;
//         console.log('constructor : Employee');
//     }
//     info(){
//         console.log('employee Name:' + this.empname);
//     }
// }
// class manager extends employee{
//     info(){
//         super.info();
//         console.log("This is manager " + this.empname);
//     }
// }

// let a = new manager('sundar pichai');
// a.info();

// class employee{
//     constructor(name, age, salary) {
//         this.eName = name;
//         this.eAge = age;
//         this.eSalary = salary;
//         console.log('This is employee class');
//     }

//     info(){
//         document.write(`<h3> Employee Salary </h3>
//         Name = ${this.eName}<br>
//         age = ${this.eAge}<br>
//         salary = ${this.eSalary}<br>
//         `);
//     }
// }

// class manager extends employee{
//     info(){
//         let ta = 1000;
//         let pa = 300;
//         let total = this.eSalary + ta + pa;

//         document.write(`<h3> Manager Salary </h3>
//         Name = ${this.eName}<br>
//         age = ${this.eAge}<br>
//         salary = ${total}<br>
//         `);
//     }
// }
// class test extends manager{

// }

// // let a = new test('ayush' , 20 , 50000 );
// let b = new test("OG", 30, 80000);
// // a.info();
// b.info();

// let complete = 3;

// let prom = new Promise(function(resolve , reject){
//     if(complete > 4){
//         resolve("it is right");
//     }else{
//         reject("it is wrong");
//     }
// });
// console.log(prom);

// function prom(complete){
//     return new Promise(function(resolve , reject){
//         if(complete){
//             resolve("i am successfull");
//         }else{
//             reject("i am failed .");
//         }
//     });
// }
// console.log(prom(true));

// function prom(complete){
//     return new Promise(function(resolve, reject){
//         console.log("fetching data , please wait.")
//         setTimeout(() =>{
//             if(complete){
//                 resolve('I am successful');
//             }else{
//                 reject("I am Failed");
//             }
//         } , 3000)
//     });
// }

// prom(false).then((result) => {
//     console.log(result);
// }).catch((error) =>{
//     console.log(error);
// });

// function prom(a,b){
//     return new Promise(function(resolve, reject){
//         console.log("fetching data , please wait.")
//         setTimeout(() =>{
//             var c = a + b;
//             if(a,b){
//                 resolve(`your answer is ${c}`);
//             }else{
//                 reject("Failed to calculate");
//             }
//         } , 2000)
//     });
// }

// prom(3,9).then((result) => {
//     console.log(result);
// }).catch((error) =>{
//     console.log(error);
// });

//modules

// import { message , hello , movie } from "./script2.js";
// console.log(message);
// hello('ayush' , 18);

// let picture = new movie('RRR' , 2022);

//promise all

// let p1 = new Promise((resolve , reject) =>{
//     setTimeout(() =>{
//         console.log("The first promise has resolved");
//         resolve(10)
//     }, 1* 1000 );
// });
// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("The second promise has resolved");
//     resolve(20);
//   }, 2 * 1000);
// });
// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("The third promise has not  resolved");
//     reject('fail');
//   }, 3 * 1000);
// });

// Promise.all([p1,p2,p3]).then((result)=>{
//     console.log(`result: ${result}`);
// }).catch((error)=>{
//     console.log(`error: ${error}`);
// })



//ajax
// function loadData(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             document.getElementById('p').innerHTML = this.responseText;
//         }
//         else if (this.readyState == 4 && this.status == 404) {
//           console.log('file not found');
//         }
//     };

//     xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
//     xhttp.send();
// };



//fetch

// fetch("https://jsonplaceholder.typicode.com/photos")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);

//     for (var i in data) {
//       var details = `${data[i].thumbnailUrl}<br> `;
//       document.write(details);
//     }
//   })
//   .catch((error) => document.write("can't fetch the data"));



//async
// async function test(){
//     return 'hello'
// }
// test().then((data)=>{
//     console.log(data);
// })


//await

// async function test(){
//     console.log('a')
//     await console.log("b");
//     console.log("c");
// }
// console.log(test());

// console.log('d');
// console.log('e');


// async function test(){
//     await console.log("2 : message");
//     console.log("3 : message");
//     console.log("4 : message");

// }

// console.log("1 : message");
// test();
// console.log("5 : message");



// async function test(){
//     console.log("2 : message");
//     const response = await fetch('./student_data.json');
//     console.log("3 : message");
//     const details = await response.json();
//     return details;
    
// }

// console.log("1: message");
// let a = test();
// console.log("4: message");
// console.log(a);


// async function details(){
//     const response = await fetch('./student_data.json');
//     const data = await response.json();
//     return data;

//     // return (await fetch('./student_data.json')).json();
// }
// details().then((result)=>{
//     document.write(res)
// }).catch((error)=>{
//     console.log(error);
// })


// async function test(){
//     try{
//         const response = await fetch('./student_data.json');
//         const data = await response.json();
//         return data;
    
// }
// catch(error){
//     console.log(error);
// }
// }

// test().then((res)=>{
//     document.write(res);
// });



//symbol data type

// let id = Symbol(" Hello world");
// console.log(id);
// alert(id.toString());

// var fruits = ["apple" , "orange" , "grapes"];

// for(let value of fruits){
//     console.log(value);
// }


























