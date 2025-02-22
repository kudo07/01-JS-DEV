// Question 1 : this keyword

let aa = 5;

console.log(this.aa);
// Question 2 : this inside Method

let user = {
  name: 'Piyush',
  age: 24,
  getDetails() {
    console.log(this.name);
    // this refers as the user objext in the current context
  },
};

// Question 3 : nested object
user.getDetails();

let userO = {
  name: 'Piyush',
  age: 24,
  // obj
  childObj: {
    //
    newName: 'Roadside Coder',
    //  method

    getDetails() {
      console.log(this.newName, 'and', this.name);
    },
  },
};

userO.childObj.getDetails();
// child obj is the object and getdetails is the method
// Here, userO.childObj.getDetails() means this refers to userO.childObj.
// "this.name not in childObj but this.name in the userO  but this refers here userO.childObj "
// and userO.childObj doesnt have name property
userO.childObj.getDetails.bind(userO)();
// .bind(thisArg)	Returns a new function with this bound (needs ())

userO.childObj.getDetails.apply(userO);

let Oser = {
  name: 'Piyush23er2e3',
  age: 24,
  getDetails() {
    const nestedArrow = () => console.log(this.name);
    // print the name becz this refers here the name in the Oser object
    nestedArrow();
  },
};
Oser.getDetails();

//
let Oser1 = {
  name: 'Piyush23er2e3',
  age: 24,
  getDetails() {
    function nestedRegular() {
      console.log(this.name);
      // undefiend
      //
    }
    nestedRegular();
  },
};

Oser1.getDetails();
// Question 4 : Class & Constructor

class userP {
  constructor(n) {
    this.name = n;
  }
  getName() {
    console.log(this.name);
  }
}

const UserOO = new userP('Piyush');
// creating the new object from the above class
console.log(UserOO.getName());

// Question 5 : Output

const user1 = {
  firstName: 'Piyush!',
  getName() {
    const firstName = 'Piyush! agrawal';
    return this.firstName;
    // this refers here as the parent object
    // this refers here user1 so user1 have firstName and  print that

    // not thtat getName
  },
};

console.log(user1.getName());

// Question 6 : What is the result of accessing its `ref`? Why?

function makeUser() {
  return {
    name: 'John',
    ref: this,
    // this refers here as the global object
    //  and global object doesnt have name property
    // ṛeturn undefined
    // this refers here as the window object
    // window object doesnt have anything called name
  };
}

let userY = makeUser();

console.log(userY.ref.name);
// undefined

// fix
function makeUserO() {
  return {
    name: 'John',
    // method
    // make ref as the funciton
    ref() {
      //       // this refers here as
      //       user2.ref() is a method call.
      // Since ref() is called on user2, this inside ref() refers to user2.
      return this;
    },
    //object
    getName: {
      collar: 'muy',
      name: 'h',
    },
  };
}

let user2 = makeUserO();

console.log(user2.ref().name);
console.log(user2.getName);

//

// Question 7 : What logs to console the following code snippet:
const userLog = {
  name: 'Piyush Agrawal !!',
  logMessage() {
    console.log(this.name);
  },
};
// here userLog.logMessage act here as callback and they never access the userLog object
setTimeout(userLog.logMessage, 1000);
// fix
setTimeout(() => {
  userLog.logMessage();
}, 2000);

// Question 8 : Output
const userGreet = {
  name: 'Piyush',
  greet() {
    return `Hello, ${this.name}`;
  },
  farewell: () => {
    // this refers here as the global window object
    return `GoodBye, ${this.name}`;
  },
};
console.log(userGreet.greet());
// console.log(userGreet.user.farewell());
// cannnot read properties of undefined

// Question 9 :

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  // read() {
  //   this.a = +prompt('a?', 0);
  //   this.b = +prompt('b?', 0);
  // },
};

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// Question 10 : Output

const something = {
  name: 'grand',
  parent: {
    child: {
      // name:"dsf",
      method() {
        console.log(this.name);
      },
    },
  },
};
const ssd = something.parent.child.method();

//
const grandparent = {
  name: 'Grandparentjgcvjvgjvjgvgjvjvljvjv',
  parent: {
    child: {
      name: 'wefdsvfEWF',
      sayName() {
        const getGrandparentName = () => console.log(this.name, 'here');
        // Grandparentjgcvjvgjvjgvgjvjvljvjv here
        getGrandparentName();
      },
    },
  },
};

const ppr = grandparent.parent.child.sayName.bind(grandparent);
ppr(); // ✅ "Grandparent"

let Oserr = {
  name: 'kuch b',
  age: 24,
  getDetails() {
    const nestedArrow = () => console.log(this.name);
    // print the name becz this refers here the name in the Oser object
    nestedArrow();
  },
};
Oserr.getDetails();

//
const grandparentt = {
  name: 'Grandparentjgcvjvgjvjgvgjvjvljvjv',
  parent: {
    child: {
      name: 'wefdsvfEWF',
      sayName() {
        const getGrandparentName = () => console.log(this.name, 'here');
        // wefdsvfEWF here
        getGrandparentName();
      },
    },
  },
};

console.log(grandparent.parent.child.sayName());
// undefined becasue doesnt return anything in the sayName()
// this for the current context in the object

var length = 4;
function callbackk() {
  console.log(this.length, 'herereerererere');
}
// [ 2, 'herereerererere' ]
const object = {
  length: 5,
  mehtod() {
    console.log(arguments);
    // { 1: 1, λ: [...] }
    arguments[0]();
    // argument=[callback,1,1,1]
    // as an array arguments
  },
};
object.mehtod(callbackk, 1);
// length of the arguments are 2 [callback,1]

//
var length = 4;
function callbackk1() {
  console.log(this.length, 'herereerererere');
}
// [ 2, 'herereerererere' ]
const object121 = {
  length: 5,
  mehtod() {
    callbackk1();

    // argument=[callback,1,1,1]
    // as an array arguments
  },
};
object121.mehtod(callbackk);
// fix
var lengthhh = 4;

function callbackk11() {
  console.log(this.lengthhh, 'herereerererere');
}

const object1211 = {
  lengthhh: 5,
  mehtod() {
    // Call the function with the global object to access the global 'length'
    callbackk11.call(globalThis);
  },
};

object1211.mehtod();

// callbackk1();
// In a browser environment, it prints:

// Copy
// Edit
// 4 herereerererere
// In Node.js, it prints:

// javascript
// Copy
// Edit
// undefined herereerererere
// IMPORTANT
// In a browser, that would be window, so window.length would be the number of frames (or 4 if you declared var length = 4).
// In Node.js, this in the global scope is an empty object, so length might be undefined.

//
// Question 11 : Implement this Code

// My Answer
var calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
};

const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);
