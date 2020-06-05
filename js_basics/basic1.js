// let sum =  function(){
//     console.log("Hello world")
// }
// sum()

// Arrow functions( (parameter)=> instead of function(parameter))
// 1
// const say = function (name) {
//   return "hey there," + name + " !";
// };
// console.log(say("Ritik"));

// 2
// const say = (name) => {
//   return `hello there, ${name}`;
// };

// 3
// console.log(say("Ritik Jain"));

// const say = (name) => `hello there, ${name}`;

// console.log(say("Ritik Jain"));

//4
// const todo = [
//   {
//     title: "coding",
//     isdone: true,
//   },
//   {
//     title: "Watching Youtube",
//     isdone: true,
//   },
//   {
//     title: "studying",
//     isdone: false,
//   },
//   {
//     title: "watching tv",
//     isdone: false,
//   },
//   {
//     title: "sleeping",
//     isdone: false,
//   },
// ];

// const thingsDone = todo.filter((todo) => todo.isdone == false);
// thingsDone.forEach((td) => console.log(td.title));
//filter function return those value which accepts the condition

// 5
// const camera = {
//   price: 600,
//   weight: 2000,
//   myDes: function () {
//     return `This Canon camera is of ${this.price}$`;
//   },
// };
// console.log(camera.myDes());
// NOTE: arrow fuction does not work, as 'this' keyword can not bind it and display undefined
// in redux to pass key value pair in arrow fxn
// const KV = ()>= ({key:'value'})

// 6
// coercion
// console.log(Number("5") + 5);
// console.log("5" - 5);
// console.log("5" + 5);
// console.log(typeof []);
// let adder = true + 5;
// console.log(adder);
// adder = 5 + false;
// console.log(adder);

// const loginDetail = [];
// const loginID = loginDetail[0];
// console.log(loginID);
// if (loginID) {
//   console.log("allow user to login");
// } else {
//   console.log("Authentication Failed");
// }

// Values interpretated as false
// false,0,'',null,undefined

//7
//Error Handling (try,catch)
// const convertToRs = (dollar) => {
//   if (typeof dollar === "number") {
//     return dollar * 71;
//   } else {
//     throw Error("Amount needs to be in number");
//   }
// };
// const myValue = convertToRs("five");
// console.log(myValue);
// console.log(typeof 5);

// const convertToRs = (dollar) => {
//   if (typeof dollar === "number") {
//     return dollar * 71;
//   }
//   throw Error("amount need to be in number");
// };

// try {
//   const myValue = convertToRs("five");
//   console.log(myValue);
// } catch (error) {
//   console.log(error);
// }
// console.log("it will not crash the program");

// 8
// maps - new data type , useful in nosql
// forof loop

// var john = {
//   name: "John",
//   age: "22",
//   isActie: true,
// };
// var marry = {
//   name: "Marry",
//   age: "21",
//   isActie: true,
// };
// var sam = {
//   name: "Sam",
//   age: "28",
//   isActie: false,
// };

// let users = new Map();
// users.set("JOHN", john);
// users.set("MARRY", marry);
// users.set("SAM", sam);

// console.log(users);
// console.log(users.size);
// console.log(users.get("MARRY"));
// console.log(users.keys());
// console.log(users.values());

// for (const key of users.keys()) {
//   console.log(key);
// }
// for (const value of users.values()) {
//   console.log(`I am ${value.name}`);
// }
// for (const [key, value] of users.entries()) {
//   console.log(key + "= " + value.name);
// }

// users.forEach((value, key) => console.log(key + " is active " + value.isActie));

var arrOfArr = [
  ["one", "1"],
  ["two", "2"],
  ["three", "3"],
];
var newMap = new Map(arrOfArr);
console.log(newMap);
for (const [key, value] of newMap.entries()) {
  console.log(key + " = " + value);
}
