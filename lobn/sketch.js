let t = 0
let x = 0
let y = 0
let redNum = 0
let blueNum = 0
let redRatio = 0
let blueRatio = 0
let total = 0

function setup()
{
  createCanvas(windowWidth, windowHeight)
  background(51)
  frameRate(60)
}

function draw()
{
  x = int(random(width))
  y = int(random(height))
  t = int(random(2))
  if (t == 1)
  {
    redNum = redNum + 1
  } else {
    blueNum = blueNum + 1
  }
  total = blueNum + redNum

  noStroke()
  drawBlue()
  drawRed()
  stroke(0, 255, 0)
  line(width/2, height, width/2, 0)
  noStroke()
  fill('black')
  text(redNum, width/4, height/2)
  fill(255)
  text(blueNum, width-(width/4), height/2)
  if (total > 5000)
  {
    noLoop()
  }
}

function drawBlue()
{
  blueRatio = blueNum/total
  fill(51)
  rect(width, 0, -blueRatio*width, height)
  console.log(blueNum)
  return
}

function drawRed()
{
  redRatio = redNum/total
  fill(255)
  rect(0, 0, width*redRatio, height)
  return
}
