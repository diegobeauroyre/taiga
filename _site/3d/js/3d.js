var angulo = 5;
var radio = 100;
var frecuencia, frecuenciaY, ciclos = 1;
var grabar = true;
var contador = 0;

function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL); // size - create canvas
  background(0);
}

function draw() {
  background(255);
  camera(0, -200, 200, 0, 0, 0, 0, -1, 0);
  strokeWeight(1);
  //box(30);
  strokeWeight(10);
  frecuencia = frameCount;
  frecuenciaY = frameCount;



  for (var i=0; i<360; i+=angulo) {
    //point(sin(radians(i+frameCount))*radio, sin(radians(i*45+frameCount))*30, cos(radians(i+frameCount))*radio);
    strokeWeight(10);
    point(
      sin(radians(i+frecuencia))*radio,
      sin(radians((i*45+frecuenciaY)*ciclos))*30,
      cos(radians(i+frecuencia))*radio
      );
    strokeWeight(2);

    /*line(
      sin(radians(i+frecuencia))*radio,
      sin(radians((i*45+frecuenciaY)*ciclos))*30,
      cos(radians(i+frecuencia))*radio,
      sin(radians(i+angulo+frecuencia))*radio,
      sin(radians(((i+angulo)*45+frecuenciaY))*ciclos)*30,
      cos(radians(i+angulo+frecuencia))*radio
      );*/
  }

  /* if(grabar && contador<=360) {
    saveFrame();
    contador += angulo;

  }*/
}
