var container = document.getElementById("container");

var pasaule = document.getElementById("pasaule");

var map = [
    //[x, y, z, rx, ry, rz, height, width, krāsa, opacity]
    [0, 0, 0, 0, 0, 0, 200, 200, "green", 0.5],
    [0, 0, -200, 0, 0, 0, 200, 200, "red", 0.5],
    [0, -100, -100, 90, 0, 0, 200, 200, "blue", 0.5],
    [0, -100, 100, 90, 0, 0, 200, 200, "orange", 0.5],
    [100, 0, 100, 0, 90, 0, 200, 200, "pink", 0.5],
    [100, 0, -100, 0, 90, 0, 200, 200, "brown", 0.5]
];

function veidotPasauli(){
    for(let i=0; i < map.length; i++){
        var elm = document.createElement("div");
        elm.id = "elements"+i;
        elm.style.position = "absolute";
        elm.style.height = `${map[i][6]}px`;
        elm.style.width = `${map[i][7]}px`;
        elm.style.background = `${map[i][8]}`;
        elm.style.opacity = map[i][9];
        elm.style.transform = `rotateX(${map[i][3]}deg) rotateY(${map[i][4]}deg) rotateZ(${map[i][5]}deg) translate3d(${map[i][0]}px, ${map[i][1]}px, ${map[i][2]}px)`;
        pasaule.append(elm);
    }
    
}

veidotPasauli();
