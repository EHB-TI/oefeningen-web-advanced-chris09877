'use strict';

let show = document.getElementById('show');
let studenten = [];
let button = document.getElementById('cStudent');
let data = [];


function Student(name,age,degree){
    this.name = name;
    this.age = age;
    this.degree = degree;

};

let student0 = new Student();
let setPersonalDetails = (details)=>{
    [student0.name,student0.age,student0.degree] = details;
    console.log(...details);
    console.log(student0.age);
    studenten.push(`Mijn naam is ${student0.name} en ik ben ${student0.age} jaar oud. Ik zit op het Ehb in de richting ${student0.degree}.\n`);

};

button.addEventListener('click', ()=>{
    data.push(prompt('Name'));
    data.push(prompt('Age'));
    data.push(prompt('Degree'));
    /*il faut oproepen le functie la il faut pcq si je le mets pas dans ce event il vas directement l'executer au lieu
    d'attendre que je click sur le button create. Dcp comme il attends pas array data est vide et puis quand j'appuie
    bah il vas remplir le array data mais il va pas rappeler le functie setPersonalDetails pcq il a deja fait */
    setPersonalDetails(data);

});


//console.log(data);
//console.log(student0);
show.addEventListener('click',  () =>{
    let div = document.createElement('div');
    let p = document.createElement('p');
    p.innerHTML = studenten;
    div.appendChild(p);
    console.log(...studenten);
});
/* oef 7 versie leerkracht :

'use strict';
window.onload = function(){
    //code executes when page is done loading.
    //Get the buttons and add eventlisteners
    document.getElementById('create').addEventListener('click', createStudent);
    document.getElementById('show').addEventListener('click', showStudents);

    let listStudents = [];//List of students

    //Student object constructor
    function Student(name, age, degree){
        this.name = name;
        this.age = age;
        this.degree = degree;
        this.courses = [];
        this.setPersonalDetails = function(details){
            [this.name,this.age,this.degree] = details;
        };
        this.addCourse = function(course){
            this.courses.push(course);
        };
        this.showStudent = function(){
            let txt = `Studentname: ${this.name}, ${this.age} years and studying ${this.degree} at EhB. 
Courses are: ${this.courses.join(', ')}.`;

            return txt;
        }

    }

    function createStudent(){
        //ask for details
        let name = prompt('Name?');
        let age = prompt('Age?');
        let degree = prompt('Degree?');

        let student = new Student(name,age,degree);

        //ask for all the courses
        while(true){
            let c = prompt('Course?');
            if (c) {
                student.addCourse(c);
            } else {
                break;
            }
        }

        // Done. Add to list\
        listStudents.push(student);

    }

    function showStudents(){
        let div = document.getElementById('content');
        for(let s of listStudents){
            let p = document.createElement('p');
            p.innerHTML = s.showStudent();
            div.appendChild(p);
        }
    }


};




















*/

