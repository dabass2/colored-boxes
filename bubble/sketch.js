var i = 0
var j = 0
var r = 0
let arr = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  // let arr = new Array(5)
  for (let i = 0; i < width; i++)
  {
    r = int(random(height))
    arr.push(r)
  }
}

function draw() {
  background(51)

  if (i < arr.length) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      let a = arr[j];
      let b = arr[j + 1];
      if (a > b) {
        swap(arr, j, j + 1);
      }
    }
  } else {
    console.log("finished");
    noLoop();
  }
  i++;

  for (let j = 0; j < arr.length; j++)
  {
    stroke(255)
    line(j, height, j, height-arr[j])
  }
}

function swap(arr, a, b) {
  temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}
