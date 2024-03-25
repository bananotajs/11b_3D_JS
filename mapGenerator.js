function veidotPasauli(){
    for(let i=0; i < map.length; i++){
        var elm = document.createElement("div");
        elm.id = "elements"+i;
        elm.style.position = "absolute";
        elm.style.height = `${map[i][6]}px`;
        elm.style.width = `${map[i][7]}px`;
        elm.style.background = `${map[i][8]}`;
        elm.style.opacity = map[i][9];
        elm.style.transform = `
            translate3d(
                ${600 - map[i][7]/2 + map[i][0]}px, 
                ${400 - map[i][6]/2 + map[i][1]}px, 
                ${map[i][2]}px
            )

            rotateX(${map[i][3]}deg) 
            rotateY(${map[i][4]}deg) 
            rotateZ(${map[i][5]}deg)
            `;
        pasaule.append(elm);
    }
}