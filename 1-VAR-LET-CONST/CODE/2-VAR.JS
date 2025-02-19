function abc() {
  console.log(a, b, c);
  // a-undefined
  const c = 30; //fucntion scope
  let b = 20;
  var a = 10;
}
abc();
// var IS THE FUNCTION SCOPE AND GLOBAL SCOPE MEAN GET NEW REFERENCE IN THE GLOBAL AND FUNCTION SCOPE
// LET AND CONST IS BLOCK SCOPE MEANS GET NEW REFENCE IN THE BLOCK SCOPE
// let is not the global scope untile the let is not initialised
// it is defined in the temporal dead zone
