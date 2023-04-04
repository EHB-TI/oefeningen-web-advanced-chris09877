'use strict'
//fallait utiliser un call back mais je vois pas cmnt dcp besoin de correction

let randomNumber =5;
let btn = document.getElementById("btn");

btn.addEventListener("click", event =>{

    let number = document.querySelector("input").value;
    console.log(number);
    let promise = compareNumber(number);
    promise.finally( ()=> {}).then(
        result => alert(result),
        error => alert(error)
    )
});


function compareNumber(number){
    return  new Promise(function(resolve, reject){
        
        if (number >= 1 && number <= 20) {
            if (number < randomNumber) {
                reject(new Error('Het mysterieuze getal is lager. Raad nog eens!'));
            }
    
            if (number > randomNumber ) {
                reject(new Error('Het mysterieuze getal is hoger. Raad nog eens!'));
            }
            if (number == randomNumber) {
                //bizzarement quand je mets 3 fois le symbole est égal ca ne marche pas"
                resolve('Je hebt het mysterieuze nummer geraden!');
            }
        }
        
        
        else
        {
            reject(new Error('Dat is geen geldig nummer'));
        }
    });
    
};
