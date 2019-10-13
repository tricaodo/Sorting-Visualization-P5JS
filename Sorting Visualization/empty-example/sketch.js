let values;
let rectWidth = 25;
let step = 0;

function setup() {
  background(255);
  let canvas = createCanvas(450, 300);
  canvas.position(600, 300);
  values = new Array(Math.floor(width / rectWidth));
  for (let i = 0; i < values.length; i++) {
    values[i] = Math.floor(random(height));
  }
  createRect(-1, -1);
}

function draw() {
  frameRate(1)
  if (!isSorted()) {
    bubbleSort(step);
    step = (step + 1)  % (values.length - 1);
  }else{
    createRect(-1, -1)
  }
}

function isSorted() {
  for (let i = 0; i < values.length - 1; i++) {
    if (values[i] > values[i + 1]) {
      return false;
    }
  }
  return true;
}

function createRect(a, b) {
  background(130);
  for (let i = 0; i < values.length; i++) {
    if (i == a) {
      fill("#f7e4a6");
    } else if (i == b) {// processing
      fill("#beeb71");
    } else {
      fill("#87d6f5");
    }
    rect(i * rectWidth, height - values[i], rectWidth, values[i]);
  }
}

async function bubbleSort(i) {
  createRect(i, i + 1);
  if (values[i] > values[i + 1]) {
     await swap(i, i + 1);
   
  }
}

async function swap(i, j) {
  await sleep(30);
  let temp = values[i];
  values[i] = values[j];
  values[j] = temp;
}

function sleep(time) {
  return new Promise((resolve, reject) => { setTimeout(resolve, time) });
}