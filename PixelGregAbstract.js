let img;

function preload() {
  img = loadImage('PixelGregAbstract.jpeg');
}

function setup() {
  createCanvas(500, 500);
  img.resize(width, height);
  noSmooth();
  image(img, 0, 0);
  frameRate(20);
}

function draw() {
  const y = frameCount % height;
  let x = random(0, width);
  const pixelColor = img.get(x, y);
  const r = pixelColor[0];
  const g = pixelColor[1];
  const b = pixelColor[2];
  const a = pixelColor[3] - random(128);
  fill(r,g,b,a);
  noStroke();
  rect(x, y, width/5, width/5);
}

function mousePressed() {
  image(img, 0, 0);
}
