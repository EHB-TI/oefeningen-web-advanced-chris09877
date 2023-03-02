'use strict';
//oef 5-6

/*START OEF 5*/ 
let student = {
    naam: document.getElementById('naam').value,
    age: document.getElementById('leeftijd').value,
    degree: document.getElementById('degree').value,
    courses: [document.getElementById('courses').value],
   
}
let name = prompt("naam");
let age = prompt("age");
let degree = prompt("degree");
let courses = prompt("coures");




//pas sur que c'est ca le verkorte versie 
//comme ca sa marche aussi quand je rajoute les haakjes il capte direct 
//que je veux le functie mais quand je mets ap ils me montre ce qu'il y a
//dans le variable exemple => tema console.log sans les haakjes
 setPersonalDetails: function (details ) {
    
    [student.naam, student.age,student.degree] = ['Mike Derycke','29','Toegepaste Informatica'];
    return student.naam + student.age +student.degree;
}

let details = ['Mike Derycke','29','Toegepaste informatica' ] ;
console.log(personalDetails(details));
student.personalDetails(details);
console.log(personalDetails);

// THE END OEF 5

// OEF 6 RIEN REUSII SA MERE

let coursesArray = [student.courses];
let coursesAdder = document.getElementById('addCourses');
coursesAdder.addEventListener('click', function () {
    addCourses();
})
let limit = 0;
let addCourses = function addCourses() {
    //je cpate pas pourquoi sans ce stap la les propreties de student n'ont pas de value
    let courses = document.getElementById('courses').value;
    student.courses = courses;
    const [...addCourses] = rest ;
    console.log(rest);

    if (student.courses !== 0) {
        coursesArray[limit] = student.courses;
        limit++;
        console.log(coursesArray[limit]);
        
        
    }

}


let showStudent = function showStudent() {
    let show = `
                Mijn naam is ${student.naam}. Ik ben ${student.age} jaar oud en volg ${student.degree} aan EhB
                Mijn vakken zijn: ${coursesArray}
                `;
    console.log(show);
}
let prompt = function prompt() {
    setPersonalDetails();
    showStudent();
}
let boutton = document.getElementById('button');
boutton.addEventListener('click', function () {
    prompt();
})