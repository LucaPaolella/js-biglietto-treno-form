'use strict';

let inputName = document.getElementById("name");
let age = document.getElementById("age");
let km = document.getElementById("km");
let create = document.getElementById("create");
let cost = document.getElementById("cost");
let TypeTicket = document.getElementById("type-ticket");


document.getElementById("create").addEventListener('click',
    function () {
        /*console.log(age.value)
        console.log(km.value)*/

        let NameValue = inputName.value; 
        console.log(NameValue);

        let AgeValue = age.value;
        console.log(AgeValue);

        let KmValue = Number(km.value);
        console.log(KmValue);

        let price = 0.21 * KmValue; /*sconto 40%*/ 
        if (AgeValue === "over") {
            price = price * 0.6
        }
        else if (AgeValue === "minorenne") { /*sconto 20%*/
            price = price * 0.8
        }
        price = price.toFixed(2)
        console.log/*(price.toFixed(2))*/;

        
        
        

        let CostValue = cost.value;
        let PriceValue = price.value;
        let TypeTicketValue = TypeTicket.value
        CostValue = PriceValue;
        console.log(price);

        if (AgeValue = "Over 65") {
            TypeTicketValue = "Over 65";
        }
        else if (AgeValue < "Maggiorenne") {
            TypeTicketValue = "Minorenne";
        }
        console.log(TypeTicketValue)

    });





