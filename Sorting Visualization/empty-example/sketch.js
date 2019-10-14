let rectangles = [];
let rectWidth = 38;
function setup() {
  createCanvas(500, 390);
  let numOfRects = Math.floor(width / rectWidth);
  for (let i = 0; i < numOfRects; i++) {
    let rectangle = new Rectangle(Math.floor(random(10, height)));
    rectangles.push(rectangle);
  }
  bubbleSort();
}

function draw() {
  background(200);
  for (let i = 0; i < rectangles.length; i++) {
    if(rectangles[i].state == -1){
      fill("#1dd1a1");
    }else if(rectangles[i].state == 0){
      fill("#feca57");
    }else{
      fill("#ff6b81");
    }
    rect(rectWidth * i + 3, height - rectangles[i].value, rectWidth, rectangles[i].value, 8, 8, 0, 0);
  }
}

async function bubbleSort(){
  for(let i = 0; i < rectangles.length; i++){
    for(let j = 0; j < rectangles.length - 1 - i; j++){
      if(rectangles[j].value > rectangles[j + 1].value){
        rectangles[j].state = 0;
        rectangles[j + 1].state = 2;
        await swap(j, j + 1);
        rectangles[j].state = -1;
        rectangles[j + 1].state = -1;
      }
    }
  }
}

async function swap(i, j){
  await sleep(300);
  let temp = rectangles[i].value;
  rectangles[i].value = rectangles[j].value;
  rectangles[j].value = temp;
}

function sleep(time){
  return new Promise(function(resolve){setTimeout(resolve, time)});
}