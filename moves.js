var speed = 20;
var uzPrieksu = 0;
var uzAtpakal = 0;
var paLabi = 0;
var paKreisi = 0;

document.addEventListener("keydown", (event) => {this.move(event, speed)});
document.addEventListener("keyup", (event) => {this.move(event, 0)});
document.addEventListener("mousemove", (event) => {
    console.log(event.movementX);
});

function move(ev, atrums){
    if(ev.keyCode == 87){
        uzPrieksu = atrums;
    }
    if(ev.keyCode == 83){
        uzAtpakal = atrums;
    }
    if(ev.keyCode == 68){
        paLabi = atrums;
    }
    if(ev.keyCode == 65){
        paKreisi = atrums
    }
}