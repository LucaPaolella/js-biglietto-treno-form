'use strict';


// let milestone1
let inputName = document.getElementById("name");
let age = document.getElementById("age");
let km = document.getElementById("km");
let create = document.getElementById("create");

// let milestone2
let PassengerName = document.getElementById("passenger-name");
let TypeTicket = document.getElementById("type-ticket");
let cost = document.getElementById("cost");
let ilTuoBiglietto = document.querySelector(".il-tuo-biglietto");




document.getElementById("create").addEventListener('click',
    function () {
        /*console.log(age.value)
        console.log(km.value)*/

        //valori e svolgimento milestone 1 
        let NameValue = inputName.value; 
        console.log(NameValue);

        let AgeValue = age.value;
        console.log(AgeValue);

        let KmValue = Number(km.value);
        console.log(KmValue);

        //calcolo prezzo
        let price = 0.21 * KmValue; /*sconto 40%*/ 
        if (AgeValue === "over") {
            price = price * 0.6
        }
        else if (AgeValue === "minorenne") { /*sconto 20%*/
            price = price * 0.8
        }
        price = price.toFixed(2)
        console.log/*(price.toFixed(2))*/;

        //valori e svolgimento milestone 2
          
        let PassengerNameValue = PassengerName.value;
        let CostValue = cost.value;
        let PriceValue = price.value;
        let TypeTicketValue = TypeTicket.value
        CostValue = PriceValue;
        console.log(price);

        ilTuoBiglietto.classList.add("show")

        if (AgeValue = "Over 65") {
            TypeTicketValue = "Over 65";
        }
        else if (AgeValue < "Maggiorenne") {
            TypeTicketValue = "Minorenne";
        }
        console.log(TypeTicketValue)

    });





