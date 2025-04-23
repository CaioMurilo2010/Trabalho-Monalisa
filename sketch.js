function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;

function draw() {
  background('#BF1515');
  fill('#00BCD4')
  stroke(100);
  strokeWeight(4)
  circle(200,200,300); //rosto
  fill('white')
  circle(150,150,60); //olho esquerda
  circle(250,150,60); //olho direita
  line(150,260,250,260); //boca
  line(120,110,190,110) //sobrancelha esquerda
  line(220,110,290,110); //sobrancelha direita
  triangle(200,190,180,210,220,210) //nariz
  fill('black')
  // circle(150,150,15); //pupila esquerda
  //circle(250,150,15); //pupila direita
  
  olhoX = map(mouseX,0,400,132,166);
  olhoY = map(mouseY,0,400,133,169);
  
  circle(olhoX,olhoY,15); // nova pupila esquerda
  circle(olhoX+100,olhoY,15); // nova pupila direita
  
  
  if(mouseIsPressed){
    console.log(mouseX,mouseY);
  }
}