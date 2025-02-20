// / Question 1 : Delete keyword in Object

const func = (function (a) {
  delete a;
  return a;
})(5);
console.log(func);
// 5
// dele property is available in the object not in the function

// Computed Properties

let property = 'firstName';
let uname = 'Piyush Agarwal';

let person = {
  property: uname,
};

let personO = {
  [property]: uname,
};
console.log(person);
// property:'Piyush agarwal'
console.log(personO);
// firstName:"piyush agarwal"
console.log(personO[property]);
// personO.[property] errorr
// personO.firstName==>valid

let user = {
  name: 'Piyush',
  age: 24,
};

for (let key in user) {
  console.log(key); // name, age
  console.log(user[key]); // Piyush, 24
}
// Question 2 : Output

const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);
// update the obj at key 'a' from "one" to 'three'
// Question 3 : Create a function multiplyByTwo(obj) that multiplies all numeric property values of obj by 2.
let nums = {
  a: 100,
  b: 200,
  title: 'My nums',
};
for (let key in nums) {
  if (typeof nums[key] == 'number') {
    nums[key] *= 2;
  }
}
console.log(nums);
// nums[key] not nums.key
// .key represent the property of "key" in nums
// Question 4 : Output (Important)

const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
console.log(a);
// a[b] and a[c] get the same key '[object Object] as object is not stored as key
// directly in the object it has to be in strings then it will store as object

// Question 5 : JSON.Stringify and JSON.parse
const userOne = {
  name: 'piyush',
  age: 99,
};
const strObj = JSON.stringify(userOne);
const objRem = {
  a: 2,
};

objRem[strObj] = true;
console.log(strObj);
// '{"name":"Piyush","age":99}'

console.log(objRem);
// { a: 2, '{"name":"piyush","age":99}': true }
// convert the obj into string to store in the another object

// localstore
// localStorage.setItem('keydummy', strObj);

// back to object
// JSON.parse

// console.log(JSON.parse(localStorage.getItem('keydummy')));

// Question 6 : Output

console.log([...'Lydia']);
// ['L','Y','D','I','A']

// Question 7 : Output

const userO = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };

console.log(admin);

// Question 8 : Output

const settings = {
  username: 'lydiahallie',
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ['level', 'health']);
console.log(data);

// Question 9 : Output

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => {
    2 * Math.PI * this.radius;
  },
};
console.log(shape.diameter());
console.log(shape.perimeter());

// Question 10 : Destructuring in object

let userSet = {
  name: 'Piyush',
  age: 24,
  fullName: {
    firstName: 'Piyush',
    lastName: 'Agarwal',
  },
};
// const name = 'Roadside Coder'; // to change name or renaming

const {
  // for specific first Name
  fullName: { firstName },
} = userSet;

const { fullName: completeName } = userSet;
console.log(firstName);
console.log(completeName);

// Question 11 : Output

// function getItems(fruitList, ...args, favoriteFruit) {
//     return [...fruitList, ...args, favoriteFruit]
// }

// getsItems(['banana', 'apple'], 'pear', 'orange');

// rest parameter are always in the end of the parameters

// Question 12 : Output

let cc = { greeting: 'Hey!' };
let d;

d = cc;
console.log(d);

// d reference to cc
// d and cc are create in the stack memory and their object are decalred in the heap memory
// which is unstructured
// reassignment is not allow
cc.greeting = 'Hello';
// change in the original
console.log(d.greeting);
// also change in the d which also reference to the same reference in the heap memory
// this is shallow copy
// Question 14 : Output

let personHere = { name: 'Lydia' };
const members = personHere;
// const memebers=[personHere]
// members[0] holds the personHere object
personHere.name = 'fwed';
personHere = null;
// re assignment will create the new reference?

console.log(members, personHere);
// members still holds that reference but personHere becomes null thats why
// members return changed object while personHere return null

// Question 15 : Output

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);
// 1️⃣ If you assign an object to another variable, both variables point to the same reference.

// javascript
// Copy
// Edit
// obj2 = obj1;  // Same reference, changing obj2 affects obj1
// 2️⃣ If you use { ...obj }, JavaScript creates a new object in memory with a different reference.

// javascript
// Copy
// Edit
// obj2 = { ...obj1 };  // New object, changing obj2 does NOT affect obj1
// shallow copy
// both have same reference

// obj1=obj2
// obj1=null
// obj2 still hold the reference

// deep copy
// obj2={...obj1}
// both have differenct reference
// when value dont pass default parameter takes and created the new object with new reference
//
// when value is pass default {...value} is ignored and holds the same reference means x holds the same reference like value holds
// thats why it updates the value

function changeAgeAndReference(person) {
  person.age = 50;
  // person = {
  //   name: 'John',
  //   age: 50,
  // };
  // person now holds the new refernce
  // initially person holds the same reference with personObj1
  // but after reassignment it holds the different reference
  // since person and personObj1 holds the same reference so if person.age is changed then
  // personObj1 also changed
  return person;
}

const personObj1 = {
  name: 'Alex',
  age: 30,
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> ?
//alex,25
console.log(personObj2); // -> ?
// alex,25

function changeAgeAndReferenceO(person) {
  person.age = 60;
  person = {
    name: 'John',
    age: 50,
  };
  // person now holds the new refernce
  // initially person holds the same reference with personObj1
  // but after reassignment it holds the different reference

  return person;
}

const personobj3 = {
  name: 'Alex',
  age: 30,
};

const personobj4 = changeAgeAndReferenceO(personobj3);

console.log(personobj3); // -> ?
//
console.log(personobj4); // -> ?
//
// now eturn the re assignment person in the function which create the new reference for the
// personobj4 and changed into john and personobj3 has changed the age into 60
// if re assignmed is not there then they will hold the same reference

function changeAgeAndReferenceOO(person) {
  person = {
    name: 'John',
    age: 50,
  };
  person.age = 60;
  // person now holds the new refernce
  // initially person holds the same reference with personObj1
  // but after reassignment it holds the different reference

  return person;
}

const personobj5 = {
  name: 'Alex',
  age: 30,
};

const personobj6 = changeAgeAndReferenceOO(personobj3);

console.log(personobj5); // -> ?
//
console.log(personobj6); // -> ?
//now person in the function which pass in the param has the same reference with the personobj5

// Question 18 : Shallow copy VS Deep copy

// Q - How to clone an object without referencing its keys to original object

// const obj = { a: 1, b: 2 };
// const objclone = Object.assign({}, obj);
// const objclone = JSON.parse(JSON.stringify(employee));
// const objclone = { ...obj };
