let canvas;
let navColor, triangleColor, strokeColor;

function setup() {
  navColor = color("#222831");
  triangleColor = color("#00ADB5");
  strokeColor = color("#EEEEEE");
}

function draw() {
  // START OF BANNER IN HEADER
  canvas = createCanvas(windowWidth, 20);
  canvas.position(0, 0);
  canvas.parent("nav");
  background(navColor);
  stroke(strokeColor);
  strokeWeight(1.45);
  fill(triangleColor);
  triangle(0, 0, width, 0, width, 15);
  // END OF BANNER IN HEADER
}
