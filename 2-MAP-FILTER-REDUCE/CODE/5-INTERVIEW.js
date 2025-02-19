let students = [
  { name: 'Piyush', rollNumber: 31, marks: 80 },
  { name: 'Jenny', rollNumber: 15, marks: 69 },
  { name: 'Kaushal', rollNumber: 16, marks: 35 },
  { name: 'Dilpreet', rollNumber: 7, marks: 55 },
];

// 1- return only
// Q1 - Return only the names of students in capital
// map
const studentNames = students.map((stu) => {
  return stu.name.toUpperCase();
});
console.log(studentNames);
// 2 iterative
let ans = [];
students.forEach((student) => {
  ans.push(student.name.toUpperCase());
});
console.log(ans);

//  Q2 - we want to get the details of students who scored more than 60 marks
const filterAns = students.filter((stu) => stu.marks > 60);
console.log(filterAns);

// Q4 - Sum total of the marks of the students
const sumTotal = students.reduce((acc, student) => {
  return acc + student.marks;
}, 0);
console.log(sumTotal);

// Q5 - Get only the names of the students who scored more than 60 marks
const filterNames = students
  .filter((student) => {
    return student.marks > 60;
  })
  .map((stu) => {
    return stu.name;
  });
console.log(filterNames);

// Q6 - print the total marks of the students with marks greater than 60 after 20 marks has been added to those students who scored less than 60.

const finalOutput = students
  .map((stu) => {
    if (stu.marks < 60) {
      stu.marks += 20;
    }
    return stu;
  })
  .filter((st) => {
    return st.marks > 60;
  })
  .reduce((acc, stu) => {
    return acc + stu.marks;
  }, 0);
console.log(finalOutput);
// reduce make down to value 1
// from number of elements to value 1
