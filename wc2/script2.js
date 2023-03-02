'use strict';
//oef 4

//start oef4

//oef4 



let student = {
    naam: document.getElementById('naam').value,
    age: document.getElementById('leeftijd').value,
    degree: document.getElementById('degree').value,
    courses: [document.getElementById('courses').value],


}


function setPersonalDetails() {
    let naam = document.getElementById('naam').value;
    let age = document.getElementById('leeftijd').value;
    let degree = document.getElementById('degree').value;
    student.naam = naam;
    student.age = age;
    student.degree = degree;

}
let coursesArray = [student.courses];
let coursesAdder = document.getElementById('addCourses');
coursesAdder.addEventListener('click', function () {
    addCourses();
})
let limit = 0;
function addCourses() {
    //je cpate pas pourquoi sans ce stap la les propreties de student n'ont pas de value
    let courses = document.getElementById('courses').value;
    student.courses = courses;

    if (student.courses !== 0) {
        coursesArray[limit] = student.courses;
        limit++;
        console.log(coursesArray[limit]);
    }

}

function showStudent() {
    let show = `
                Mijn naam is ${student.naam}. Ik ben ${student.age} jaar oud en volg ${student.degree} aan EhB
                Mijn vakken zijn: ${coursesArray}
                `;
    console.log(show);
}
function prompt() {
    setPersonalDetails();

    showStudent();
}
let boutton = document.getElementById('button');
boutton.addEventListener('click', function () {
    prompt();
})