let rectangles = [];
let rectWidth = 30;

function setup(){
  createCanvas(480, 300);
  for(let i = 0; i < Math.floor(width)/rectWidth; i++){
    let rectangle = new Rectangle(Math.floor(random(5, height)));
    rectangles.push(rectangle);
  }
  bubbleSort();
}


function draw(){
  background(51);
  for(let i = 0; i < rectangles.length; i++){
    if(rectangles[i].state == -1){
      fill("#4578bf");
    }else if(rectangles[i].state == 0){
      fill("#ba4153");
    }else{
      fill("#63c914");
    }
    rect(rectWidth * i, height - rectangles[i].value, rectWidth, rectangles[i].value);
  }
}

async function bubbleSort(){
  for(let i = 0; i < rectangles.length; i++){
    for(let j = 0; j < rectangles.length - 1 - i; j++){
      if(rectangles[j].value > rectangles[j + 1].value){
        rectangles[j].state = 0;
        rectangles[j + 1].state = 0;
        await swap(j, j + 1);
        rectangles[j].state = -1;
        rectangles[j + 1].state = -1;
      }
      rectangles[j].state = 2;
      rectangles[j + 1].state = 2;
    }
  }
}

async function swap(i, j){
  await sleep(200);
  let temp = rectangles[i].value;
  rectangles[i].value = rectangles[j].value;
  rectangles[j].value = temp;
}

function sleep(time){
  return new Promise(function(resolve){setTimeout(resolve, time)});
}