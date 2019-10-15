let rectangles = [];
let rectWidth = 34;
function setup() {
    createCanvas(1000, 390);
    let numOfRects = Math.floor(width / rectWidth);
    for (let i = 0; i < numOfRects; i++) {
        let rectangle = new Rectangle(Math.floor(random(10, height - 40)));
        rectangles.push(rectangle);
    }
    // textAlign(CENTER, BASELINE);
    quickSort(0, rectangles.length);
}
function draw() {
    background(200);

    for (let i = 0; i < rectangles.length; i++) {
        if (rectangles[i].state == -1) {
            fill("#05c46b"); // default green
        } else if (rectangles[i].state == 0) {
            fill("#f7d794"); // yellow for swap 2 elements
        } else if (rectangles[i].state == 1) {
            fill("#ff6b81"); // pink pivot
        } else if (rectangles[i].state == 2) {
            fill("#9AECDB");
        }
        text(rectangles[i].value, i * rectWidth + 6, height-20);
        rect(i * rectWidth, height - rectangles[i].value - 40, rectWidth, rectangles[i].value, 8, 8, 0, 0);
    }
}


async function quickSort(start, end) {
    if (start < end) {
        let pivot = await partition(start, end);
        Promise.all(
            [quickSort(start, pivot)],
            [quickSort(pivot + 1, end)]);
    }
}

async function partition(start, end) {
    let pivot = rectangles[start].value;
    rectangles[start].state = 1; // pivot red
    let pivotIndex = start;

    for (let i = start + 1; i < end; i++) {

        if (pivot > rectangles[i].value) {
            rectangles[i].state = 2; // current little green   
            pivotIndex++;
            await swap(i, pivotIndex);
        }
    }

    rectangles[start].state = 0; 
    rectangles[pivotIndex].state = 0;

    await swap(start, pivotIndex);
    return pivotIndex;
}

async function swap(i, j) {

    await sleep(700);
    let temp = rectangles[i].value;
    rectangles[i].value = rectangles[j].value;
    rectangles[j].value = temp;

    rectangles[i].state = -1; //
    rectangles[j].state = -1;
}

function sleep(time) {
    return new Promise(function (resolve) { setTimeout(resolve, time) });
}
