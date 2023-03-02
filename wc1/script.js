//oef1
alert("Hello world");
//oef2
let a = 10;
console.log(a+5)
//oef3 capte pas 
/*let age = document.getElementById("leeftijd");
let number = age.innerHTML;
function prmopt(){
    if(number >= 18){
        console.log("Welcome");
    }
    else{
        console.log("vas la bas");
    }
}
prmopt();*/

//oef4
let b = document.getElementById("jaaroud");
let boutton = document.getElementById("button");
boutton.addEventListener('click',function(){
    let c = b.value;
    //of andere method => let c = document.getElementById("jaaroud").value;
    //comme ca sa marche aussi mais faut que sa apparait apres que le value soit attribuer tsb.
    console.log(c);
    if(c >= 18){
        console.log("Elle est actif");
    }
    else{
        console.log("aah flemme de beton");
    }
    
    //oef 7
    let d = document.getElementById("naam").value;
    console.log(d);
    let f = d.toUpperCase(d);
    console.log(f);
    //oef 8

})

//oef9 

let q = "Web Essentials";
let q1 = q.replace(/essentials/i, "Advanced");
console.log("q before changes: "+q);
console.log("q after changes: "+q1);

//oef 10
let landen = ["België", "Frankrijk", "United-Kingdom", "Russia", "Republic of Democratic Congo", "Haïti","Zimbabwe"]

console.log()
function land(){
    let bigLand = "";
    for(let i = 0; i<7; i++){

        if(landen[i].length > bigLand.length){
            bigLand = landen[i];
        }
    }
    console.log(bigLand);
}
land();

//oef 12

const date = new Date();
let day = date.getDate();
let Month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let year = date.getFullYear();

console.log(day + " "  + Month[date.getMonth()] + " " + year);

//oef 13
//tu peux mettre en milisecodonde les deux dates pour apres retransformer 
//en date mais vu que cv donner des jours, jsp si il y aura un bug ou pas 
// sinon la reposne en miliseconde tu la convertie en jours grace a une function bereken days 
// mais oblige y a un moyen de faire ca sans function
const birthday = new Date("08 july 2023");
let result = birthday - date;

console.log(result/86400000); //cette maniere de faire est correct flemme de trouver autre choses