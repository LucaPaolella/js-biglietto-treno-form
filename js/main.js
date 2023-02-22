'use strict';

let age = document.getElementById("age");
let km = document.getElementById("km");
let create = document.getElementById("create");



document.getElementById("create").addEventListener('click',
function () {
    console.log(age.value)
    console.log(km.value)
    let AgeValue = age.value;
    let KmValue = km.value;
    let price = 0.21 * KmValue;
    if (AgeValue >= 65){
        price = parseInt (KmValue * 0.084)
    }
    else if (AgeValue < 18){
        price = parseInt (KmValue * 0.042)
    }
    console.log(price)
});

