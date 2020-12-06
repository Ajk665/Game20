var hr;
var mn;
var sc;

function setup() {
createCanvas(500,500);
hr = hour();
mn = minute();
sc = second();
}

function draw() {
  background(255,255,255);  
  drawSprites();
  angleMode(DEGREES)
  translate(300,300);
  scAngle = map(sc,0,3600,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,12,0,360);
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0)
  pop();
  push();
  rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,75,0)
  pop();
  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,50,0)
  pop();
  noFill();
}