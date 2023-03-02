'use strict';

//oef1
//normalement les waarde doivent s'afficher en numeric mais y a les rgb waarde et les numeric waarde
//belek a pas confondre puis pour test faut aussi activer les functions 
let color = {
    nR: 'waarde rood',
    nG: 'waarde groen',
    nB: 'waarde blue',
};

function showColor() {

    let r = `de numeriek waarde van rood is: ${color.nR} en de rgb shit is: rgb(255 255 red)`;
    let g = `de numeriek waarde van groen is: ${color.nG} en de rgb shit is: rgb(255 2gr een)`;
    let b = `de numeriek waarde van blue is: ${color.nB} en de rgb shit is: rgb(255 25b lue)`;

    console.log(r);
    console.log(g);
    console.log(b);

}

function setColor() {
    color.nR = `rgb(255 255 red)`;
    color.nB = `rgb(255 25b lue)`;
    color.nG = `rgb(255 2gr een)`;

    let r = `de numeriek waarde van nR is: ${color.nR}`;
    let g = `de numeriek waarde van nG is: ${color.nG} `;
    let b = `de numeriek waarde van nB is: ${color.nB} `;
    console.log(r);
    console.log(g);
    console.log(b);
}
//showColor(color.nR, color.nB, color.nG);
//setColor(color.nR, color.nB, color.nG);

//oef 2 uitbreiding de 1 mais ca montre que j'ai pas bien capté oef1 du coup a refaire
//oef3 uitbreiding de 2 j'ai meme pas lu

//oef4 

let student = {
    naam: document.getElementById('naam').value,
    age: document.getElementById('leeftijd').value,
    degree: document.getElementById('degree').value,
    courses: document.getElementById('courses').value,


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