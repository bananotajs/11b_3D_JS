var container = document.getElementById("container");
var pasaule = document.getElementById("pasaule");

var z = 0;

veidotPasauli();

function attelotPasauli(){
    pasaule.style.transform = `translate3d(0px, 0px, ${z}px)`;
    z++;
}

let spele = setInterval(attelotPasauli, 10);