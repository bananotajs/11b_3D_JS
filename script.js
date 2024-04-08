var container = document.getElementById("container");
var pasaule = document.getElementById("pasaule");



veidotPasauli();

function attelotPasauli(){
    dz = uzPrieksu - uzAtpakal;
    dx = paKreisi - paLabi;

    pawn.z += dz;
    pawn.x += dx;


    pasaule.style.transform = `translate3d(${pawn.x}px, ${pawn.y}px, ${pawn.z}px)`;
}

let spele = setInterval(attelotPasauli, 10);