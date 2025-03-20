function a() {
  console.log(x);
  //   10
  b();
  function b() {
    var c = 10;
    function c() {
      console.log(c);
    }
  }
}

var x = 10;
a();
// var is global and fucntion scope
// 10
// SCOPE==> ACCESS SPECIFIC VARIABLE IN OUR CODE
// WHERE CAN ACCESS VARIABLE"B"
// SCOPE IS DIRECTLY DEPENDE ON THE LEXICAL ENV
//WHEN WE RUN THIS PROGRAM A GLOBAL EXECUTION CONTEXT IS CREATED
// IT IS PUT IN THE CALL STACK
//TRIES TO ASSIGN GLOBAL VALUES IN THE CALL STACK
