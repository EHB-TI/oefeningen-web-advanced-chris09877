'use strict';
//oef 5-6

//let coursesArray = [];
let data = [];

let student = {
    naam: 'default',
    age:'88888' ,
    degree:'zero' ,
    courses: [],
    setPersonalDetails(details) {
        
        [this.naam, this.age, this.degree] = details;
        //console.log(details);
    },

    addCourses (...courses) /* ici on utilise le spread operartor pcq le array argument doit catch des waarden or
    qu'avec setPersonalDetails "details" a deja des arguments a l'interieur dcp ce qui possede déja qu'on utilise mais avec 
    le argumet "courses" on prends des arguments pour les mettre dans le array */ {
        /*cette methode avec un autre array marche mais il faut faire avec 1 seule array 
         coursesArray.push(`${courses},`)*/
         this.courses = [...this.courses, ...courses];
         /*ici on dit que courses est egal a lui meme pour qu'il perds pas les cours qu'il la déjà en magasiner
         puis on dit qu'il est aussi égal a "...courses" pcq comme on appelle plusiseurs fois le functie on veut que 
         chaque nouveau waarde ce rajoute dans student.courses*/
        console.log(courses);
    
    },

    showStudent() {
        let show = ` Mijn naam is ${this.naam}. Ik ben ${this.age} jaar oud en volg ${this.degree} aan EhB
        Mijn vakken zijn: ${this.courses.join(', ')}`;
        /*`
                    Mijn naam is ${this.naam}. Ik ben ${this.age} jaar oud en volg ${this.degree} aan EhB
                    Mijn vakken zijn: ${coursesArray}
                    `;*/
        console.log(show);
        //console.log(data);
        
    },

    
}


data.push(prompt("naam"));
data.push(prompt("age"));
data.push(prompt("degree"));


student.addCourses('qqs','hjfjf');
student.addCourses('undo');
student.setPersonalDetails(data);
student.showStudent();



