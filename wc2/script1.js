'use strict';

//oef1-3
let color = {
    nR: 0,
    nG: 0,
    nB: 0,
    showColor: function (){
        let rgb = `rgb(${color.nR}, ${color.nG}, ${color.nB})`;

        console.log(rgb);
    },
    setColor: function (r, g, b) {
        //wnr ik of gebruik werkt het niet goed ik kan de values niet in vullen en het zal toch de succes boodschap displayen
        //wnr ik "&&" zal het altijd de "ERROR !!! VUL WAARDES IN !!" boodschap terug sturen
        if (r ===! null && g ===! null && b ===! null) {
            if (r >= 0 && g >= 0 && b >= 0 && r <= 255 && g <= 255 && b <= 255) {
                this.nB = b;
                this.nG = g;
                this.nR = r;
                console.log("SUCCESS !! IT WORKS !!");
            }
            else 
            { 
                console.log("ERROR DIE SHIT WERK NIET !!"); 
            }


        }
        else
        {
            console.log("ERROR !!! VUL WAARDES IN !!");
        }
    }
};
let red = prompt('GIVE RED VALUE');
let blue = prompt('GIVE BLUE VALUE');
let green = prompt('GIVE GREEN VALUE');

//test oef 1-3
color.setColor(red,blue,green);
color.showColor();

