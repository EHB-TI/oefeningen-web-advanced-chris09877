'use strict'
let button = document.getElementById('button-addon2');
let buttonPlus = document.getElementById('plus');


button.addEventListener('click', event => {
    let searchValue = document.querySelector('input').value;
    console.log(searchValue);
    startSearch(searchValue);
})



async function startSearch(searchValue) {
    let api = await fetch(' http://www.omdbapi.com/?i=tt3896198&apikey=f738dc92');
    if (api.ok) {
        console.log('fetch ok');
        api.json().then(result => {
            console.log(result)
            let promise = getSearch(result, searchValue);
            promise.finally(() => { }).then(
                result => console.log("tout marche frerot")
                , error => alert(`${error}`)
            );
            buttonPlus.addEventListener('click', () => {
                return new Promise((resolve, reject) => {
                    let counter = 0;
                    counter += result.Runtime;
                    localStorage.setItem("count", counter + localStorage.getItem("count"));
                    resolve((localStorage.getItem("count")));
                    reject(new Error("error dans le promise pour plus btn"));
                }).finally(() => { }).then((
                    result => console.log(result)

                    , error => alert(`${error}` + error)
                ))
            })
        }, error => {
            alert("ERROR JSON:" + api.status);
        });
    }
    else {
        alert('ERROR' + api.status)
    }
}

function getSearch(result, searchValue) {
    console.log("get search ok");
    return new Promise((resolve, reject) => {
        let div = document.getElementById('div');
        let p = document.createElement('p');
        let title = document.createElement("h4");
        let img = document.createElement("img");
        img.src = `${result.Poster}`;
        img.className = 'rounded float-start';
        let section = document.querySelector("section");
        if (result.Title == searchValue) {
            console.log('if ok');
            title.innerHTML = `${result.Title}`;
            p.innerText = `Release year: ${result.Year}\nDirector: ${result.Director}\nDuration: ${result.Runtime}`;
            div.appendChild(p);
            div.appendChild(img);
            section.appendChild(title);
            console.log("append normalement reussie")
            resolve(alert("T'AS VU SA MARCHE? "));
        }
        else {
            reject(new Error('ERROR IN GET SEARCH FUNCTIE'));
        }
    })
}