var container = document.getElementById("container");
var pasaule = document.getElementById("pasaule");



veidotPasauli();

function attelotPasauli(pawn){
    dz = uzPrieksu - uzAtpakal;
    dx = paKreisi - paLabi;

    pawn.z += dz;
    pawn.x += dx;

    pasaule.style.transform = `
        translate3d(
            ${pawn.x}px, 
            ${pawn.y}px, 
            ${pawn.z}px
        )
        
        rotateX(${pawn.rx}deg)
        rotateY(${pawn.ry}deg)
        rotateZ(${pawn.rz}deg)
        `;
}

let spele = setInterval(function(){attelotPasauli(speletajs)}, 10);