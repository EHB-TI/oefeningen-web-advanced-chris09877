'use strict'

//okay quand tu mets le async function comme ca déjà plus besoin d'appeller le async function

window.onload = async ()=>{
    console.log("async function ok");

    let p2 = document.createElement('p');
    let div = document.getElementById('container');

    let response = await fetch('data.json',)
    if(response.ok){
        console.log(response.status);
        let data = await response.json();
        console.log(data);
        p2.innerHTML = `${data.name}, ${data.age}`;
        //div.appendChild(document.createElement('article'));
        console.log(p2.innerHTML);
        div.appendChild(p2);
        console.log(data.courses);
        
    }
    else{
        
        return alert(`${response.status}`);
    }
}


