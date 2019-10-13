let values = [];
let rectWidth = 20;
function setup() {
  createCanvas(500, 350);
  values = new Array(width / rectWidth);
  for(let i = 0; i < values.length; i++){
    values[i] = floor(random(height));
  }
  bubbleSort();
}

async function bubbleSort(){
  for(let i = 0; i < values.length; i++){
    for(let j = 0; j < values.length - 1 - i; j++){
      if(values[j] > values[j + 1]){
        await swap(j, j + 1);
      }
    }
  }
}

async  function swap(i, j){
  await sleep(100);
  let temp = values[i];
  values[i] = values[j];
  values[j] = temp;
}

function sleep(time){
  return new Promise(function(resolve, reject){setTimeout(resolve, time)});
}

function draw() {
  background(200);
  for(let i = 0; i < values.length; i++){
    fill("#d95d34");
    rect(rectWidth * i, height - values[i], rectWidth, values[i]);
  }
}