{
  var a = 12;
}
console.log(a);
// accessible

// 2

{
  let b = 12;
}
// console.log(b);
// b is not defined
// not accessible out side of the block scope
// same for const, shadowing

function test() {
  //global scope
  let a = 'hello'; //funciton scope
  if (true) {
    let a = 'hi'; //block scope
    console.log(a);
    //hi
  }
  console.log(a);
  //hello
}

// var is afunction and global scope in block it modify the original function or global scope variable
//
var teacher = 'student'; //global scope
function testO() {
  //global scope
  var teacher = 'student 1'; //funciton scope
  if (true) {
    //block scope
    var teacher = 'studen 2';
    console.log(teacher);
    //studen 2
  }
  console.log(teacher);
  //   student2
}
// var in global scope and var in function remain unchaingeding var student variable in funconti scope
// but in block scope if var is declared it assign or modify the existing value of student which defined in the function scope
// but in let and const both are block scope if there is let variable value in the block scope it didnt change the function scope value
testO();

// illlegail shadowing
function vest() {
  //global
  var a = 'hello'; //function scope
  //   let b = 'hi'; //function scope
  if (true) {
    //function scope
    let a = 'hi'; //block scope
    // var b = 'goodbye'; //block scope
    console.log(a);
    // console.log(b);
  }
}
//var are global and function scope
// let is block scope
// b is a block scope variable means moify and change not happe after the function scope
// in var block scope re declared is happen and change the function scope variable didnt effect
// but let is block scope so we cant re decalred again
let f = 'hi';
var g = 'hi1';
console.log(g);
{
  let g = 'hi';
  //hi
  console.log(g);
}
//hi1

// same thing can not re declared as let is not the function scope
// in block scope you have to give the pure new variable name
// for var its the same thing but in let it does nt the same thing the let in block scope is only that scope only
// outside the block scope we can create the new variable with the same name

// DECLARATION
var a;
var a;

let b;
// let b;
// error redecalre the block scope
// cannot re declare
// shadowing
// let a;
{
  // let a;
  // a variable has different scope in global and in block scope let is block scope and it doesnt effect with the
  // global one
}
// revise
// phase 1 read line by and formal declartion give them scope
function test() {
  //global
  var aa = 10; //function
  if (true) {
    var aa = 20; //block
  }
  console.log(aa);
  // 20
}
//
test();
// console.log(aa);
//  aa is not defined
// aa is update from 10 to 20 because aa is not a block scope so aa in block and aa in has has same refrecen
// if this is let

function rest() {
  let aba = 10100;
  if (true) {
    let aba = 20202;
  }
  console.log(aba);
  // 10100
}
// console.log(aba);
// aba is not defiend
rest();
// let is the block scope means it define there with new reference as compare to function and global scope
let nm = 10;
function fest() {
  let nm = 20;
  console.log(nm);
  if (true) {
    let nm = 30;
    console.log(nm);
    // 30
  }
  //10
  console.log(nm);
  // 20
}
fest();
// the let variable nm in the global has the same reference with the function fest(())
// it is not a function and global scope means the same variable declared in the global and function has same reference
// the let nm has changed from 10 to 20 and in block scope the "nm" is complete different from [gloabl, function]scope the global and function "nm"
// are pointing to the same reference
// heaps are unstructured
let variable = 10;
function multiple(x) {
  return x * 10;
}
let variable1 = multiple(variable);
console.log(variable1);

function abs() {
  console.log(a);
  // undefined
  // hoist the variable a not initialise the variable a till now
  var a = 10;
}
abs();
// var is the global and function scope it get new references in the global and function scope
//
var al = 101010;
if (true) {
  var al = 20202; //modify the existing one or create the new if not present in the global
}
function dest() {
  if (true) {
    var al = 1000001; //fucntion k andr ka block scope
    // updating the exsiting in the function scope or creating the new as it is function scope is var so it not
    // log outside the function scope means has the new refrence with [same] functin and block one
  }
  console.log(al);
}
console.log(al);
// 20202
dest();

let la = 101010;
// let la = 909090;
// let is the block scope can re declared here
if (true) {
  let la = 20202; //new reference as let is the block scope
  // i can create the new let with new reference her in the block scope but not in global
}
function dst() {
  let la = 1010100101;
  if (true) {
    let la = 1000001; //get the new scope
  }
  console.log(la);
  // if let la=101010 in the global and in function scope there is not la then it search up up in the global scope and print 101010
  // but if let la=1010100101 in the fcutnbion it log that value because it first search in thee function scope and then global scope it didnt take the
  // block scope in function scope let la is allowed but in gloabla gain let la is not allowed although it reference the same variabel
  // becaus let is not a global and funtion scope it not get the new refernce again declared in the global or function scope but it get new reference in the block scope
}
console.log(la);
// 20202
dst();
// if let la is not in the function scope it get up to parent or in global to find la as let is not global and function scope so it get as the same reference
// var is the global and function scope it get new reference in the global and function scope
var jk = 13;
function fest() {
  if (true) {
    // var jk = 12;
  }
  console.log(jk);
  // undefied
}
console.log(jk);
// in var in block scope is in the function scope if not in the block it go to the parent or function scope one step up only but in function also there is not there any
// jk so undefiend

function gt() {
  var gl = 4343;
  if (true) {
    console.log(gl);
    // 4343
  }
  // the gl has
}
gt();

function tg() {
  var gl = 4343;
  if (true) {
    var gl = 444;
    console.log(gl);
    // 444
  }
  console.log(gl);

  // the gl has the same scope in the block or function scope same with global and block
}
tg();
// let is hoisted but not initialized, leading to a ReferenceError.
// // var is function-scoped, not block-scoped, so a is accessible outside the block.
// //  let is block-scoped, so a is not accessible outside the block.
// //  var is function-scoped, so it remains accessible within the function
// //  let is block-scoped, so a is not accessible outside the if block.
// var is hoisted but initialized as undefined before assignment.
// var is hoisted but initialized as undefined before assignment.

// The var a inside the IIFE is hoisted but uninitialized at console.log(a), so it prints undefined.
// Then a = 20 is assigned, so the next log prints 20.
lo = 232;

function hg() {
  console.log(lo);
  // step one up and find lo in the global yes lo in the global so print it
  // 232
}
console.log(lo);
// 232

hg();

//
lol = 232;

function hkl() {
  console.log(lol);
  // if lol is defined in the local function scope yes then it print undefined as in phase 1 scope resolutiona
  // if lol is not defiend here then it step up one and find in the global
  var lol = 3232;
  console.log(lol);

  // step one up and find lo in the global yes lo in the global so print it
  // 232
}
console.log(lo);
// 232

hkl();

// s
var lolo = 22020;

function gkl() {
  // var lolo = 3232;
  console.log(lolo);
  // step one up and find lo in the global yes lo in the global so print it
  // 232
}
console.log(lo);
// 232

gkl();
// inner() forms a closure and remembers x = 10 from outer().

let olol = 1212;

function io() {
  console.log(olol);
  // 1212
  // let is not the fucntion and global scope if not found inthe fucntion scope
  // it step up and find in global
}
io();

// Feature	var	let
// Scope	Function-scoped	Block-scoped
// Hoisting	Hoisted & initialized as undefined	Hoisted but in Temporal Dead Zone (TDZ)
// Re-declaration	Allowed in the same scope	Not allowed in the same scope
// Accessible in global?	Yes, if declared outside a function	Yes, but behaves differently
// Global variables (var and let declared at the top level) are accessible anywhere in the script.
// Function-scoped var and let do not exist outside functions.
// if not .in the presnet scope let and var setp up variable and find in parent or in gloabl if it in the fucntion scope
// var and let can accesed the global scope variable name if they are not in the present scope means function
var di = 2343;
function fff() {
  console.log(di);
  // 2343
}
fff();

let pop = 997324;
function ooo() {
  console.log(pop);
  //997324
}
ooo();

let foff = 4213;
{
  console.log(foff);
  // let anc var can access variable one step up it has nothing relate with the scopeing
}
// let in the global and function scope have different reference
// var in global and function scope has same reference
// https://chatgpt.com/c/67b31ea1-fdf0-8004-afb0-757d669be894
