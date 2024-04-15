var container = document.getElementById("container");
var pasaule = document.getElementById("pasaule");

veidotPasauli();

function attelotPasauli(pawn){
    dxx = paKreisi - paLabi;
    dzz = uzPrieksu - uzAtpakal;

    dx = paLabi - paKreisi; 
    dz = -(uzPrieksu - uzAtpakal);

    dry = - mouseX;

    mouseX = 0;

    pawn.z += dz;
    pawn.x += dx;

    pawn.ry += dry;

    pasaule.style.transform = `
    translateZ(600px)
    rotateX(${-pawn.rx}deg)
    rotateY(${-pawn.ry}deg)
    rotateZ(${-pawn.rz}deg)    

        translate3d(
            ${-pawn.x}px, 
            ${-pawn.y}px, 
            ${-pawn.z}px
        )

        
        `;
}

let spele = setInterval(function(){attelotPasauli(speletajs)}, 10);