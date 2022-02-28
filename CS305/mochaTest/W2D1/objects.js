"use strict";
// /*disable-Eslint*/
// /**
//  * 
//  * @param {object} obj object is given
//  * @returns {properties} properties of the object
//  */
// function iterateObject(obj){

// }
const numbers = {
    one: 1,
    two: 22,
    three: 333,
    four: 444
    };
    
const properties = ["one", "two", "three", "four"];

for (let property of properties){
    console.log(numbers[property]);
}

// Exercise
// 12
// 
// Create 3 objects, student1, student2, student3
// 
// property studentId : s101, s102, s103 respectively
// 
// property quiz answers: [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
// 
// push the students into an array, quiz
// 
// write a function, gradeQuiz , that takes the quiz array and an array of correct answers, e.g.,
// [3,1,2,4] and returns an array that has scores for each student. Their score is the number of
// correct answers.
// 
// expect [ 3, 2, 3 ]
// 
// use a helper function to compute the score for a given student

const student1 = {
    studentid: "s101",
    quiz:[1,1,2,4],
    correctAnswers: [3,1,2,4],
    func: function (){
        this.quiz.push(student1.studentid);    
    },
    score: function gradeQuiz(quiz,correctAnswers){
        let counter = 0;
        for (let key in Object.keys(student1)){
            for (let studentAnswer of quiz){
                for (let correctAnswer of correctAnswers){
                    if (studentAnswer===correctAnswer){
                        counter++;
                    }
                }
                console.log(value);
            }
        }
        let scores = [];
        return scores;
    }
};
const student2 = {
    studentid: "s102",
    quiz:[2,1,2,2],
    correctAnswers: [3,1,2,4],
    func: function (){
        this.quiz.push(student2.studentid);    
    },
    score: function gradeQuiz(quiz,correctAnswers){

        let scores = [];
        return scores;
    }
};

const student3 = {
    studentid: "s103",
    quiz:[3,1,3,4],
    correctAnswers: [3,1,2,4],
    func: function (){
        this.quiz.push(student3.studentid);    
    },
    score: function gradeQuiz(quiz,correctAnswers){

        let scores = [];
        return scores;
    }
}
