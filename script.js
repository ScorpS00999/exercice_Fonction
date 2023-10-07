"use script";

let a = "jean";
let b = "paul";
let result;

function checkName(nom1, nom2) {
    if (nom1 == nom2) {
        result = true;
    } else {
        result = false;
    }
    console.log(result);
}

checkName(a,b);
