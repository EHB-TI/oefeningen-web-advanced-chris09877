'use strict'



let button = document.getElementById('button');


button.addEventListener('click', event => {
    let searchValue = document.querySelector('input').value;
    console.log(searchValue);
    startSearch(searchValue);
})

async function startSearch(searchValue){
    let api = await fetch(' http://www.omdbapi.com/?i=tt3896198&apikey=f738dc92');
    if(api.ok){
        console.log('fetch ok');
         api.json().then(result =>{
            let promise = getSearch(result,searchValue);
            promise.finally(() =>{}).then(
                result => console.log(result) 
                   
                ,error => alert(`${error}`)
            );
        }, error => {
            alert("ERROR JSON:" + api.status);
        });
    }
    else{
        alert('ERROR' + api.status)
    }
}

function getSearch (result,searchValue){
    console.log("get search ok");
    const data = Object.values(result);
    return new Promise((resolve, reject) => {
        let div = document.getElementById('div');
            let p = document.createElement('p');
       if (result.Title == searchValue) {
        
            console.log('if ok');
            p.innerText = `${[...data]}`;
            div.appendChild(p);
            console.log("append normalement reussie")
            resolve(alert("T'AS VU SA MARCHE? "));
       }
        else{
          reject(new Error('ERROR IN GET SEARCH FUNCTIE'));
        }
    })
}