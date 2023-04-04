'use strict';

let message = document.getElementsByClassName('succesboodschap');
let allert = document.getElementById('alert alert-primary');
allert.style.display = "none"; // faut toujours faire ca en 2 partie sinon chelou un peu
//pour utiliser display faut que ca soit avec le id et non le class name
//const dc = document.querySelectorAll('.form-check-input');
//dc.addEventListener('onclick', clickEvent(dc));
let studenten = [];
let limit = studenten.length;
let myform = document.getElementById('form');

let student = {
    naam: '',
    age: ''
}


myform.addEventListener('submit', (event) => {
    
    event.preventDefault(); //pour eviter que le form soit vide après avoir submit
    let name = document.getElementById('naam').value;
    let age = document.getElementById('age').value;
    student.naam = name;
    student.age = age;
    studenten[limit] = `${name} ${age}`;
    console.log(name);
    console.log(...studenten);
    if (studenten[limit] !== '') {
        clearInputs();

    }
    
    /*let formCheck = document.getElementsByClassName('form-check');
    formCheck.addEventListener('onclick', (event))
    let dc = document.querySelectorAll('.form-check-input');
        dc.addEventListener('onclick', (event) => {
            [dc] = box;
            let check = [];
            for(let i = 0; i <= 6; i++){
                if(box[i].checked === true){
                    [box[i]] = check;
                    console.log(check[i]);
                }
            }
        })*/
   

});

function clearInputs() {
    let inputName = document.getElementById('naam');
    let inputAge = document.getElementById('age');
    inputAge.value = '';
    inputName.value = '';

    //ici c'est oef 3

    if (allert.hasAttribute('class'))
    //if (allert.style.display === 'none')
    {
        allert.style.display = 'block';
        let Smsg = document.createElement('p');
        Smsg.innerHTML = 'sucess student aangemaakt';
        allert.appendChild(Smsg);
    }

    else {
        alert('oups ca marche pas');
    }

}

//start oef 4 marche pas
/*function clickEvent (dc) {

    let box = [dc];
    let check = [];
    for (let i = 0; i <= 6; i++) {
        if (box[i].checked == true) {
            [box[i]] = check;
            console.log(check[i]);
        }
    }
};

*/
/*
let formCheck = document.getElementsByClassName('form-check').addEventListener('click', (event) => {
    let dc = document.querySelectorAll('.form-check-input');
    [dc] = box;
    let check = [];
    for(let i = 0; i <= 6; i++){
        if(box[i].checked === true){
            [box[i]] = check;
            console.log(check[i]);
        }
    }
});*/