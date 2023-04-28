'use strinct'
// pour ameloirer le code faut que dataKeys devienne un dataEntries
//comme ca tu peux placer des if par-ci par la pour faire le filtratie
//comme il faut pcq mtn 2a je select mais il se passe rien pcq ya pas de change
//et en plus quand je select une nouvelle klas bah les student de l'autre
//class reste dans la site or qu'il devrait pas
window.onload = async () =>{

    let selectKlas = document.getElementById('klasgroep');
    let selectLeerling = document.getElementById('leerlingen');
    let optionGroupLeerling = document.createElement('optgroup');

    let response = await fetch('data.json');
    let data = await response.json();

    console.log(data);

    
    let dataKeys = (Object.keys(data));
    dataKeys.forEach(element=>{
        let optionKlas = document.createElement('option');
        optionKlas.innerHTML = element;
        selectKlas.appendChild(optionKlas); 
        //ici opt-group selectklas
        optionGroupLeerling.label = element;
        console.log(optionGroupLeerling);
        selectLeerling.appendChild(optionGroupLeerling); 
    
    })


    selectKlas.addEventListener('change',()=>{
        selectGroup();
        
    })
    function selectGroup(){
        let output = selectKlas.value;
        console.log(output);
        let dataEntries = Object.entries(data);
        dataEntries.forEach(element =>{
        
            if(element[0] === output){
                optionGroupLeerling.label = output;
                let entries = Object.entries(element[1]);
                entries.forEach(entrie =>{
                let optionLeerling = document.createElement('option');
                optionGroupLeerling.appendChild(optionLeerling);
                optionLeerling.innerHTML = entrie[1];
                })
                

            }
            
        })
    }

    selectLeerling.addEventListener('change',()=>{
        showLeerling();
    })

    function showLeerling(){
        let output = selectLeerling.value;
        let naamleerling = document.getElementById('leerling');
        naamleerling.innerHTML = output;
    }

/*
    console.log(Object.keys(data));
    console.log(Object.values(data));
    console.log(Object.entries(data));
*/
}