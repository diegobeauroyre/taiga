var numS = 20;
var numZ = 40;
var numX = 10;
var semilla;
var estilo = 0;

function setup(){
    createCanvas(windowWidth,windowHeight); // size - create canvas
    background(0);
    semilla = int(random(1000));
    numS = 20;
    ancho = hight/numS;
    alto = height/numS;
    estilo = 0;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    ancho = width/numS;
    alto = height/numS;
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
            
        case 1:
            noFill();
            for (var j=0; j < numS; j++) {
              for (var i=0; i<numS; i++) {
                var pX = width/numS*j;
                var pY = height/numS*i;
                var patron = int(random(2));
                if (patron == 0) {
                  strokeWeight(touchX/20);
                  arc(pX, pY, width/numS, height/numS, 0, HALF_PI);
                  arc(pX+width/numS, pY+height/numS, width/numS, height/numS, PI, HALF_PI+PI);
                }
                if (patron ==1) {
                  arc(pX + width/numS, pY, width/numS, height/numS, HALF_PI, PI);
                  arc(pX, pY+height/numS, width/numS, height/numS, HALF_PI+PI, TWO_PI);
                }
              }
            }
            break;
            
            case 2:
                fill(0);
                for (var j=0; j < numS; j++) {
                  for (var i=0; i<numS; i++) {
                    var pX = width/numS*j;
                    var pY = height/numS*i;
                    var patron = int(random(4));
                    if (patron == 0) {
                      //strokeWeight(mouseX/20);
                      triangle(pX+numZ, pY, pX+numZ, pY+numZ, pX, pY+numZ);
                    }
                    if (patron == 1) {
                      //strokeWeight(mouseX/20);
                      triangle(pX, pY, pX+numZ, pY, pX+numZ, pY+numZ);
                    }
                    if (patron == 2) {
                      //strokeWeight(mouseX/20);
                      triangle(pX, pY, pX+numZ, pY, pX, pY+numZ);
                    }
                    if (patron == 3) {
                      //strokeWeight(mouseX/20);
                      triangle(pX, pY, pX+numZ, pY+numZ, pX, pY+numZ);
                    }
                  }
                }
                break;
            
              case 3:
                fill(0);
                for (var j=0; j < numS; j++) {
                  for (var i=0; i<numS; i++) {
                    var pX = width/numS*j;
                    var pY = height/numS*i;
                    var patron = int(random(4));
                    if (patron == 0) {
                      strokeWeight(touchX/20);
                      line (pX+numX, pY, pX+numX, pY+numZ);
                      line (pX+numS, pY+numX, pX+numS, pY+(numX*3));
                      line (pX+(numX*3), pY, pX+(numX*3), pY+numZ);
                    }
                    if (patron == 1) {
                      strokeWeight(touchX/20);
                      line (pX+numX, pY, pX+numX, pY+numS);
                      line (pX+(numX*3), pY+numS, pX+(numX*3), pY+numZ);
                    }
                    if (patron == 2) {
                      strokeWeight(touchX/20);
                      line (pX+numS, pY, pX+numS, pY+numX);
                      line (pX+numS, pY+(numX*3), pX+numS, pY+numZ);
                    }
                    if (patron == 3) {
                      strokeWeight(touchX/20);
                      line (pX+numX, pY+numX, pX+numX, pY+(numX*3));
                      line (pX+numS, pY, pX+numS, pY+numZ);
                      line (pX+(numX*3), pY+numX, pX+(numX*3), pY+(numX*3));
                    }
                  }
                }
                break;
    }
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
            
        case 1:
            noFill();
            for (var j=0; j < numS; j++) {
              for (var i=0; i<numS; i++) {
                var pX = width/numS*j;
                var pY = height/numS*i;
                var patron = int(random(2));
                if (patron == 0) {
                  strokeWeight(touchX/20);
                  arc(pX, pY, width/numS, height/numS, 0, HALF_PI);
                  arc(pX+width/numS, pY+height/numS, width/numS, height/numS, PI, HALF_PI+PI);
                }
                if (patron ==1) {
                  arc(pX + width/numS, pY, width/numS, height/numS, HALF_PI, PI);
                  arc(pX, pY+height/numS, width/numS, height/numS, HALF_PI+PI, TWO_PI);
                }
              }
            }
            break;
            
            case 2:
                fill(0);
                for (var j=0; j < numS; j++) {
                  for (var i=0; i<numS; i++) {
                    var pX = width/numS*j;
                    var pY = height/numS*i;
                    var patron = int(random(4));
                    if (patron == 0) {
                      //strokeWeight(mouseX/20);
                      triangle(pX+numZ, pY, pX+numZ, pY+numZ, pX, pY+numZ);
                    }
                    if (patron == 1) {
                      //strokeWeight(mouseX/20);
                      triangle(pX, pY, pX+numZ, pY, pX+numZ, pY+numZ);
                    }
                    if (patron == 2) {
                      //strokeWeight(mouseX/20);
                      triangle(pX, pY, pX+numZ, pY, pX, pY+numZ);
                    }
                    if (patron == 3) {
                      //strokeWeight(mouseX/20);
                      triangle(pX, pY, pX+numZ, pY+numZ, pX, pY+numZ);
                    }
                  }
                }
                break;
            
              case 3:
                fill(0);
                for (var j=0; j < numS; j++) {
                  for (var i=0; i<numS; i++) {
                    var pX = width/numS*j;
                    var pY = height/numS*i;
                    var patron = int(random(4));
                    if (patron == 0) {
                      strokeWeight(touchX/20);
                      line (pX+numX, pY, pX+numX, pY+numZ);
                      line (pX+numS, pY+numX, pX+numS, pY+(numX*3));
                      line (pX+(numX*3), pY, pX+(numX*3), pY+numZ);
                    }
                    if (patron == 1) {
                      strokeWeight(touchX/20);
                      line (pX+numX, pY, pX+numX, pY+numS);
                      line (pX+(numX*3), pY+numS, pX+(numX*3), pY+numZ);
                    }
                    if (patron == 2) {
                      strokeWeight(touchX/20);
                      line (pX+numS, pY, pX+numS, pY+numX);
                      line (pX+numS, pY+(numX*3), pX+numS, pY+numZ);
                    }
                    if (patron == 3) {
                      strokeWeight(touchX/20);
                      line (pX+numX, pY+numX, pX+numX, pY+(numX*3));
                      line (pX+numS, pY, pX+numS, pY+numZ);
                      line (pX+(numX*3), pY+numX, pX+(numX*3), pY+(numX*3));
                    }
                  }
                }
                break;
            
            
    }
}
    
function keyPressed() {
  if (key==' ') {
    semilla = int(random(1000));
  }
  
  
switch(keyCode) {
    case UP_ARROW:
    estilo++;
    break;
    case DOWN_ARROW:
    estilo++;
    break;
  }
  
}