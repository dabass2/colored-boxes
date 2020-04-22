let img;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  img = loadImage('./crowDog.jpg');
}

function draw() {
  background(0);
  orbitControl()

  ambientLight(250);
  // pointLight(255, 255, 255, locX, locY, 100);

  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  box(windowWidth*.3);
  pop();
}
