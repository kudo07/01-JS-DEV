// global space; top level
var a = 10;

function x() {
  // this variable 'x' is not in global space
  var x = 10;
}
console.log(window.a);
// quokka is run in the node js so window is not defiend here
console.log(a);
// assume global space
