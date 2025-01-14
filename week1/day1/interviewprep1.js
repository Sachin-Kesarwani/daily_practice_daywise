// // 1 

// (function() {
//     var x = y = 5;
//   })();
//   console.log(typeof x, typeof y); // undefined number

// // 2

// function foo() {
//   return {
//     bar: "hello"
//   };
// }
// function baz() {
//   return 
//   {
//     bar: "hello"
//   };
// }
// console.log(foo()); //{bar: "hello"};
// console.log(baz()); //undefined becasue of ASI (automatic semicolon insertion),

// // 3

// const arr = [1, 2, 3];
// const modified = arr.map((num) => num * 2).filter((num) => num > 4);
// console.log(modified); // [2 , 4 , 6]=>filter num > 4 =>[6]

// // 4

// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     return count;
//   };
// }
// const counter = outer();
// console.log(counter()); //1
// console.log(counter()); //2

// // 5

// console.log(typeof null); // "object" , its a know bug in javascript
// console.log(typeof []); // "object"
// console.log(Array.isArray([]));  // true

// // 6

// let x = "Hello";
// x[0] = "h";
// console.log(x); //Hello ,because Strings are immutable in JavaScript. You cannot change a character directly.

// // 7

// console.log(0.1 + 0.2 === 0.3); // falseFloating-point arithmetic in JavaScript can lead to precision issues. 0.1 + 0.2 equals 0.30000000000000004

// // 8

// let a = 10;
// (function () {
//   console.log(a); //ReferenceError: Cannot access 'a' before initialization , let is hoisted but remains in a temporal dead zone (TDZ) until it is initialized.
//   let a = 20;
// })();


// // 9

// const obj = { a: 1, b: 2 };
// Object.freeze(obj);
// obj.a = 3;
// console.log(obj); //{ a: 1, b: 2 } , because if use object.freeeze ,its means object is immutable , now we cannot update , add and delete properties

// //10

// console.log("5" - 2); // 3 , because type coercian
// console.log("5" + 2); // 52
// console.log("5" * 2); // 10

// //11

// console.log(false == 0);  //true , because of type coercian and == only check value not type
// console.log(false === 0); // false ,=== check ,  type and value both

// //12
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000); 
// }
// // 3
// // 3
// // 3

// // how to resolve

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000); 
// }

// // or 

// for (var i = 0; i < 3; i++) {
//  ((i)=>{
//     setTimeout(() => console.log(i), 1000); 
//   })(i)
// }

// // 13

// console.log(typeof NaN); // number
// console.log(isNaN("Hello")); // true
// console.log(Number.isNaN("Hello")); // false


// // 14

// const person = { name: "John" };
// Object.seal(person);
// person.name = "Doe";
// person.age = 30;
// console.log(person); // { name:"Doe" , }

// // 15 

// const obj = { a: 1, b: 2 };
// const copy = { ...obj, b: 3 };
// console.log(copy); // { a: 1, b: 3 }

// // 16

// const obj = { a: 1 };
// Object.defineProperty(obj, "b", {
//   value: 2,
//   writable: false, // Determines whether the value of the property can be changed.
//   configurable: false, // Determines whether the property can be deleted or its attributes (writable, enumerable, etc.) modified.
//   enumerable: true, // Determines whether the property is visible in object iterations like for...in or Object.keys.
// });
// obj.b = 3;
// console.log(obj); // {a:1 , b:2}

// // 17 

// console.log([..."hello"]); //["h" , "e" , "l" ,"l" , "o"]

//18

// console.log([1, 2, 3].map((num) => [num * 2])); // [[2] , [4] , [6]]

// // 19

// function foo(a, b, ...rest) {
//   console.log(rest); // [3, 4, 5]
// }
// foo(1, 2, 3, 4, 5);

// // 20 

// console.log("hi".__proto__ === String.prototype); //true , All objects in JavaScript inherit from their respective prototypes.
// console.log([].__proto__ === Array.prototype); //true , All objects in JavaScript inherit from their respective prototypes.
// console.log((() => {}).__proto__ === Function.prototype); //true , All objects in JavaScript inherit from their respective prototypes.

// //21

// function sayHi() {
//   console.log(name); // undefined 
//   console.log(age);  // ReferenceError: Cannot access 'age' before initialization
//   var name = "John";
//   let age = 25;
// }
// sayHi();

// // 22

// let x = 1;
// const y = x++;
// console.log(x, y); // 2 , 1  because x++ increments x after returning its current value, so y gets 1 and x becomes 2.

// //23

// console.log(1 < 2 < 3); // 1 < 2 < 3 evaluates as (1 < 2) < 3, which is true < 3. Since true is 1, the final result is true.
// console.log(3 > 2 > 1); // 3 > 2 > 1 evaluates as (3 > 2) > 1, which is true > 1. Since true is 1, the final result is false.


// //24
// console.log([1, 2, 3] + [4, 5, 6]); //Arrays are converted to strings when concatenated, resulting in "1,2,3" + "4,5,6", which is "1,2,34,5,6".


// // 25

// let obj = { a: 1 };
// let copy = Object.assign({}, obj);
// copy.a = 2;
// console.log(obj.a); // {a:1} ,Object.assign creates a shallow copy, so modifying the copy doesn’t affect the original object.

// // 26

// console.log([] == false);  // [] is coerced to an empty string "", and "" == false is true.
// console.log({} == false);  // {} is not coerced in the same way, so it’s false.

// // 27 
// (function () {
//   var a = (b = 3);
// })();
// console.log(typeof a); // undefined 
// console.log(typeof b); // "number"
// // because var a = (b = 3) assigns 3 to b globally and a locally. a is undefined outside the function, but b is a global variable.

// // 28
// console.log(!!null);  // false
// console.log(!!"");    // false
// console.log(!!1);     // true
// // because !! coerces a value to its boolean equivalent.

// // 29

// console.log(+"5"); // 5 , because adding uranary
// console.log(typeof +"5"); // "numver" , because adding uranary
// console.log(+true);   // 1  , because adding uranary
// console.log(+false);  // 0  ,because adding uranary

// // 30 
// let nums = [1, 2, 3];
// nums[10] = 11;
// console.log(nums); //[ 1, 2, 3, <7 empty items >, 11]
// console.log(nums[5]); // undeined

// //31
// console.log("hello".toUpperCase().split("").reverse().join("")); // "OLLEH"

// // 32
// let a = {};
// let b = { key: "b" };
// let c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]); // 456 because Objects are converted to strings ("[object Object]"), so a[b] and a[c] refer to the same key.


// // 33

// console.log((() => 10)()); // 10 because Both are immediately invoked function expressions (IIFE).
// console.log((function () { return 20; })()); //20 Both are immediately invoked function expressions (IIFE).

// //34

// let x = { a: 1 };
// let y = x;
// x.a = 2;
// console.log(y.a); // 2 , because Objects are passed by reference, so y points to the same memory as x.

// //35

// console.log(true + false);  // 1 + 0 = 1 ==> 1
// console.log(10 + "20"); // 1020
// console.log("20" - 10); // 10
// console.log("10" * "2"); // 20

// 36 
// function test() {
//   console.log(this); // global object 
// }
// test();


// // 37

// const obj = { a: 1 };
// Object.preventExtensions(obj);
// obj.b = 2;
// console.log(obj); //{ a: 1 } , Object.preventExtensions() prevents adding new properties to an object.

// // 38 
// const arr = [10, 20, 30];
// delete arr[1];
// console.log(arr); // [10 , 20 , 30 ]  , delete removes the value at index 1, but does not reduce the array length. It leaves a hole in the array.
// console.log(arr.length); // 3

// // 39 

// let count = 0;
// console.log(count++); // 0
// console.log(++count); // 2 


// // 40 
// const obj = { a: 1 };
// Object.seal(obj);
// obj.a = 2;
// obj.b = 3;
// delete obj.a;
// console.log(obj); // {a:2}

// // 41 
// console.log(null == undefined); //true
// console.log(null === undefined); //false

// // 42 

// const person = {
//   name: "Alice",
//   greet: function () {
//     console.log(this.name); // undefined , When greet is called without a context, this defaults to undefined (or the global object in non-strict mode).
//   },
// };
// const greet = person.greet;
// greet();

// 43 
// console.log(typeof NaN); //"number"
// console.log(NaN === NaN); //false  , NaN is not equal to itself as per IEEE floating-point rules.

// // 44 
// let a = 1;
// setTimeout(() => {
//   console.log(a); // 2
// }, 0);
// a = 2;

// // 45 
// const arr = [1, 2, 3];
// const result = arr.map((num) => {
//   if (num > 1) return;
//   return num;
// });
// console.log(result); // [1 , undefined , undefined] 

// // 46

// console.log([] + {}); // [] + {} results in string concatenation: "[]" + "[object Object]".
// console.log({} + []); //{} at the start of a line is treated as a block, so the second example becomes +[] which evaluates to 0.

// // 47 
// function test() {
//   console.log(this);
// }
// const obj = { test };
// obj.test();
// // output => { test: [Function: test] } , When test is called as a method of obj, this refers to obj.

// // 48 
// const set = new Set([1, 2, 2, 3]);
// console.log([...set]); // [1,2,3]

// // 49 
// function add(a, b = a) {
//   return a + b;
// }
// console.log(add(3)); // 6

// // 50 
// let a = { x: 1 };
// let b = Object.assign({}, a);
// b.x = 2;
// console.log(a.x); // 1 because Object.assign creates a shallow copy, so modifying b does not affect a.

// // 51 
// const func = (x = 5, y = x + 2, z = y * 2) => {
//   console.log(x, y, z); // 3 , 5 , 10
// };
// func(3);

// // 52

// console.log("A"-1) // NaN
// console.log("Tilak"+"100") //Tilak100

// // 53
// let x = 1;
// function modifyX() {
//   x = 2;
//   return x;
// }
// console.log(modifyX()); // 2
// console.log(x);         // 2

// //54
// const add = (a, b) => {
//   return a + b;
// };
// const multiply = add(2, 3) * 2;
// console.log(multiply); // 10


//55 
// function incrementCounter() {
//   let counter = 0;
//   return function () {
//     counter++;
//     console.log(counter);
//   };
// }
// const inc = incrementCounter();
// inc(); //1
// inc(); //2
// const newInc = incrementCounter();
// newInc(); //1


// // 56 
// const numbers = [1, 2, 3, 4];
// const even = numbers.filter((num) => num % 2 === 0); 
// even[0] = 10;
// console.log(numbers); //[1, 2, 3, 4];
// console.log(even);    //[10,4]

// // 57 

// let sum = 0;
// [1, 2, 3, 4].forEach((num) => {
//   if (num % 2 === 0) return;
//   sum += num; // sum = 1+3
// });
// console.log(sum); // 4
 
// //58 
// //   Can you fix issue?
// const obj = {};
// Object.defineProperty(obj, "name", {
//   value: "John",
// });
// obj.name = "Alice";
// console.log(obj.name);
// // solution
// const obj = {};
// Object.defineProperty(obj, "name", {
//   value: "John",
//   writable:true //
// });
// obj.name = "Alice";
// console.log(obj.name);

// // 59
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.sayHi = () => {
//   console.log(`Hi, my name is ${this.name}`); //undefined  , Arrow functions don’t bind their own this. 
// };
// const p1 = new Person("Alice");
// p1.sayHi();

// // 60 
// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// for (let key in obj) {
//   setTimeout(() => {
//     console.log(key, obj[key]);
//   }, 1000);
// }


// // 61 
// const str = "abc";
// const newStr = str.replace("a", "d");
// console.log(str);
// console.log(newStr);

// // 62 
// const person = {
//   name: "Alice",
//   greet: function() {
//     console.log("Hello, " + this.name);
//   }
// };
//  person.greet() // Hello , Alice
// const greet = person.greet;
// greet(); // Hello , undefined


// // 63 

// let arr4=[1,2,3]
// arr4.length=0
// console.log(arr4) //[]

//64 
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // undefined
