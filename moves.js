var speed = 7;
var uzPrieksu = 0;
var uzAtpakal = 0;

document.addEventListener("keydown", (event) => {this.move(event, speed)});
document.addEventListener("keyup", (event) => {this.move(event, 0)});

function move(ev, atrums){
    if(ev.keyCode == 87){
        uzPrieksu = atrums;
    }
    if(ev.keyCode == 83){
        uzAtpakal = atrums;
    }
}