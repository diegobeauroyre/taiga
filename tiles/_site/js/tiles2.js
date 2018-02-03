var numS = 20;
var numZ = 40;
var numX = 10;
var semilla;
var estilo = 0;

function setup(){
    createCanvas(800,800); // size - create canvas
    background(0);
    semilla = int(random(1000));
}

function draw(){
    background(255);
    randomSeed(semilla);
    estilos();
}

function estilos() {
    switch(estilo) {

      case 0:
        for (var j=0; j < numS; j++) {
          for (var i=0; i<numS; i++) {
            var pX = width/numS*j;
            var pY = height/numS*i;
            var patron = int(random(2));
            if (patron == 0) {
              strokeWeight(touchX/20);
              line(pX, pY, pX+width/numS, pY+height/numS);
            }
            if (patron == 1) {
              strokeWeight(touchY/20);
              line(pX, pY+height/numS, pX+width/numS, pY);
            }
          }
        }
        break;
    }

    
    
}