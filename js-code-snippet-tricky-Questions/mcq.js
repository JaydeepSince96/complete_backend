//1))=====================================================================

// let a = {};
// let b = { key: "b" };
// let c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]); // output 456

//  when you use an object as a key in a plain JavaScript object ({}), JavaScript automatically calls toString() on that object behind the scenes to convert it into a string key.
// a[b] = a["[object Object]"] = 123; (behind the scene a[b]=123, b.toString(); // "[object Object]")
// a[c] = a["[object Object]"] = 456; (behind the scene a[c]=456, c.toString(); // "[object Object]")

// so it will overide as a["[object,object]"]=456 and give a[object object] = 456

// 2))==================================================================================================

// let obj1 = { key: "value" };  // create object
// let obj2 = obj1;              // obj2 references same object as obj1
// let obj3 = obj2;              // obj3 also references same object

// obj1.key = "new value";       // modifies the shared object (obj1, obj2, obj3 all see this)

// obj2 = { key: "another value" }; // obj2 now points to a **new** object

// console.log(obj1.key, obj2.key, obj3.key); // output:-new value another value new value


//3))===================================================================================

// const obj = {
//   a: "foo",
//   b: function () {
//     console.log(this.a);
//   },
// };

// const c = obj.b;

// obj.b(); // ✅ called as a method
// c();     // ❌ called as a standalone function

//Output:- foo undefned


// 4)) =====================================================================================

// let x = 1;

// if (function f() {}) {
//   x += typeof f;
// }

// console.log(x);

// if (function f() {}) {
  // ... This return truthy  value
//}
// Why does this evaluate to a truthy value, even though it looks like there "isn't something like function f"?
// Specifically, the function f() {} inside the if statement is treated as a function expression, and function expressions return the function object itself, which is always truthy.
// In this question typeof f is not defined so it is giving undefined.

//5))===========================================================================================

// let x = [1, 2, 3];
// let y = [1, 2, 3];
// let z = y;

// console.log(x == y);   // false
// console.log(x === y);  // false
// console.log(z == y);   // true
// console.log(z == x);   // false

//x == y     // false, different references
//x === y    // false, strict equality, still different references
//z == y     // true, same reference
//z == x     // false, Even though z is the same as y, x is still a different object, so:

// 6))=========================================================================================================

// const add = (a = 1, b = 2) => a + b;
// console.log(add());
// console.log(add(5));
// console.log(add(undefined, 10));
// console.log(add(null, 10))

// arrow functions with a single expression (like a + b) implicitly return the result — you don’t need a return keyword. So: resultant console of add() = 3
//add(5) a = 5 and b is missing so :- a + b = 5 + 2 = 7
// add(undefined, 10) undefined triggered default value a =1, b = 10 so resultant :- 11
// add(null, 10) null doesn't triggered the default value so b =10 resultant :- 10

// 7))===============================================================================================

// console.log(typeof null);         // ➜ "object"
// console.log(typeof undefined);    // ➜ "undefined"
// console.log(null === undefined);  // ➜ false
// console.log(null == undefined);   // ➜ true

//This is a known historical bug in JavaScript.

// null is not actually an object, but due to how JavaScript was originally implemented, typeof null returns "object".

// This behavior is kept for backward compatibility.

// 🧠 Just remember:

// typeof null === "object" ← known quirk

// 8))========================================================================================================

// (function(){
//   var a = b = 3;
// })();

// console.log("a defined? " + (typeof a !== 'undefined')); // false
// console.log("b defined? " + (typeof b !== 'undefined')); // True

// here var a = b = 3 shorthand of 
// b= 3
// var a = b so that we will get false and true as a result


// 9))============================================================================================================

// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     }
// };
// myObject.func();

// bar bar undefined bar
// In the outer function, both this and self refer to myObject and therefore both can properly reference and access foo.
// In the inner function, though, this no longer refers to myObject. As a result, this.foo is undefined in the inner function, whereas the reference to the local variable self remains in scope and is accessible there.

// 10))==============================================================================================================

// Q What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?
// A The short and most important answer here is that use strict is a way to voluntarily enforce stricter parsing and error handling on your JavaScript code at runtime. Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions. In general, it is a good practice.

// 11))======================================================================================================================

// function foo1()
// {
//   return {
//       bar: "hello"
//   };
//   // Here, the return statement is followed on the same line by an object literal. So the JavaScript interpreter returns the object { bar: "hello" } as expected.
// }

// function foo2()
// {
//   return
//   {
//       bar: "hello"
//   };
// }

// console.log("foo1 returns:");
// console.log(foo1());
// console.log("foo2 returns:");
// console.log(foo2());

//The behavior you're observing is due to JavaScript's automatic semicolon insertion (ASI) and how it interprets return statements when used with objects.

// At first glance, it might look the same, but the key difference is the newline after return.
// JavaScript's automatic semicolon insertion kicks in and interprets this:

// return
// {
//   bar: "hello"
// };

//as:-

// return; // Semicolon inserted here automatically
// {
//   bar: "hello"
// };

// Output:-

// foo1 returns:
// Object {bar: "hello"}
// foo2 returns:
// undefined

//12))=========================================================================================================

// Q) Write a sum method which will work properly when invoked using either syntax below.
// console.log(sum(2,3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5

// function sum(x) {
//   if (arguments.length == 2) {
//     return arguments[0] + arguments[1];
//   } else {
//     return function(y) { return x + y; };
//   }
// }

// 13))===================================================================================================

// Q What will be the output ?

// var d = {};
// [ 'zebra', 'horse' ].forEach(function(k) {
// 	d[k] = undefined;
// 	console.log(d[k])
// });
//Output:- undefined undefined

//14))===================================================================================================

// var arr1 = "john".split('');
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');
// arr2.push(arr3);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// output:-"array 1: length=5 last=j,o,n,e,s"
//         "array 2: length=5 last=j,o,n,e,s"


// slice(-1) give you (arr.length)nth element if you do slice(-2) it will give you (arr.length-1, arr.length)nth elements.
// When you pushed the arr2.(arr3) the arr1 become ['j','o','h','n',['j','o','h','n','s']] that's why when We did arr1.length It give 5, same for arr2
