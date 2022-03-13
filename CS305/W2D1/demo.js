"use strict";
/*eslint-disable*/
const studentsArray = [
    {studentId: "s101", quizAnswers: [1,1,2,4]},
    {studentId: "s102", quizAnswers: [2,1,2,2]},
    {studentId: "s103", quizAnswers: [3,1,3,4]},
];
function total(studentsArray){
let total = 0;
for (let student of studentsArray){
    let sum = 0;
    for (let quizAnswer of student.quizAnswers){
        sum += quizAnswer;
    }
    //console.log(sum);
    total += sum;
}
return total;
}
console.log(total(studentsArray));
// const studentObj = studentsArray[1];
// console.log(studentObj);
// const arrQuizAnswers = studentObj.quizAnswers;
// console.log(arrQuizAnswers);
// const sumQuizAnswers = arrQuizAnswers.reduce((a,b) => a+b,0);
// console.log(sumQuizAnswers);

// const sumQuizAnswers = arrQuizAnswers.reduce((a,b)=> a+b,0);
// console.log(sumQuizAnswers);