'use strict'
let search = document.querySelector('input');
let buttonPlus = document.getElementById('plus');


search.addEventListener('keypress', event => {
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
/* 
le oplossing pas compliquer tu feras quand t'as le temps

'use strict'
 De cijfers voor de commentaar stellen de regellijnen voor met de bijhorende code
    De volgende oefening is uitgebreid om een meer realistisch scenario te tonen.
    Bij elke keystroke in het inputfield, halen we alle resultaten op
        29 Event listener geplaatst op inputfield, event keyup. Functie fetchResults 
        86-87 Fetch alle waarden
        94 Indien error => toon boodschap. Meestal vanwege te veel resultaten
        95-100Indien een lijst is terug gekomen => plaats de eerste 5 films met titel en jaar in de div resultlist(html). 
    
    In de div resultlist(html) plaatsen we de resultaten. 
    Enkel als we klikken op een link, worden de details van de film opgehaald.
        31-34 event listener op alle elementen met klasse list-group-item. Functie fetchFilm
        In fetchFilm
            61 Halen text op uit het aangeklikte element
            62-63 String magic om jaar en titel eruit te halen
            65-66 Fetch details
            69-75 Plaats details in voorziene detail blok. 
            78 Toon detailblok
            79 verberg resultlist



let counter = 0;
let results;
let apikey = '&apikey='; //Vul hier eerst je eigen api key in
let baseurl = 'http://www.omdbapi.com/?';
window.onload = () => {
    //Voeg event listener toe - Input change
    document.getElementById('inputTitle').addEventListener('keyup', fetchResults);

    //Voeg event listener toe - elke link voor click
    Array.from(document.getElementsByClassName('list-group-item')).forEach(function(element) {
        element.addEventListener('click', fetchFilm);
    });
    

    //Voeg event listener toe - Add movie - Tel runtime erbij
    document.getElementById('addMovie').addEventListener('click', function (event) {
        //Up the counter
        counter += parseInt(results.Runtime);
        document.getElementById('counter').innerText = counter;
        //save to localstorage
        localStorage.setItem('moviecounter', counter);

    });

    //initialiseer de counter
    if (localStorage.getItem('moviecounter')) {
        counter = parseInt(localStorage.getItem('moviecounter'));
    }

    document.getElementById('counter').innerText = counter;

    //hide moviecard
    document.getElementById('moviecard').setAttribute('hidden', true);
    document.getElementById('resultlist').setAttribute('hidden', true);

}

let fetchFilm = async (event) => {
    let str = event.target.text;
    let year = str.split('/ Year: ')[1].trim();
    let title = str.split('/ Year: ')[0].trim();
    
    let response = await fetch(`${baseurl}t=${title}&y=${year}${apikey}`);
    results = await response.json();
    
    //pas src attribuut aan van image. Kan ook: img.src = 'url'
    let img = document.getElementById('poster').setAttribute('src', results.Poster);

    //cardtitle, carddescription, carddirector
    document.getElementById('cardtitle').innerText = results.Title;
    document.getElementById('carddescription').innerText =
        `Year: ${results.Year} - Runtime: ${results.Runtime}`;
    document.getElementById('carddirector').innerText = `Director: ${results.Director}`;

    //Unhide moviecard, hide list
    document.getElementById('moviecard').removeAttribute('hidden');
    document.getElementById('resultlist').setAttribute('hidden', true);

}

//Get multiple movies
let fetchResults = async (event) => {
    // console.log(`${baseurl}t=parasite${apikey}`);
    let response = await fetch(`${baseurl}s=${event.target.value}${apikey}`);
    results = await response.json();
    // console.log(results);

    //Loop over results and display first 5 results
    let count = 1;
    console.log(results);
    if (results) {
        if(results.Error) document.getElementById(`message`).innerText = 'Keep typing...';
        for (let r of results.Search){
            document.getElementById(`message`).innerText = '';
            if (count == 6) break;
            document.getElementById(`result${count}`).innerText = `${r.Title} / Year: ${r.Year}`;
            count++;
        }   
    }
    //Unhide moviecard
    document.getElementById('resultlist').removeAttribute('hidden');
}*/