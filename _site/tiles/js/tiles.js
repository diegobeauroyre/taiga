var pX, pY, vX, vY, diam;
// int float 
function setup(){
    createCanvas(800,800); // size - create canvas
    background(0);
    pX = width/2;
    pY = height/2;
    vX = random(-5,5);
    vY = random(-5,5);
    diam = 50;

}

function draw(){
    ellipse(touchX,touchY,diam,diam);
}