let rectangles = [];
let rectWidth = 38;
function setup() {
    createCanvas(800, 390);
    let numOfRects = Math.floor(width / rectWidth);
    for (let i = 0; i < numOfRects; i++) {
        let rectangle = new Rectangle(Math.floor(random(10, height - 50)));
        rectangles.push(rectangle);
    }
    quickSort(0, rectangles.length);
}
function draw() {
    background(200);
    for (let i = 0; i < rectangles.length; i++) {
        if (rectangles[i].state == -1) {
            fill("#1dd1a1");
        } else if (rectangles[i].state == 0) {
            fill("#feca57");
        } else if (rectangles[i].state == 1) {
            fill("#ff6b81");
        } else {
            fill("#48dbfb");
        }
        rect(i * rectWidth, height - rectangles[i].value, rectWidth, rectangles[i].value, 8, 8, 0, 0);
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
    let pivotIndex = start;
    for (let i = start + 1; i < end; i++) {
        rectangles[start].state = 2;
        if (pivot > rectangles[i].value) {
            pivotIndex++;
            rectangles[pivotIndex].state = 1;
            await swap(i, pivotIndex);
        }
        rectangles[start].state = -1;
    }
    rectangles[start].state = 0;
    rectangles[pivotIndex].state = 1;

    await swap(start, pivotIndex);
    rectangles[pivotIndex].state = -1;
    rectangles[start].state = -1;
    // rectangles[pivotIndex].state = -1;

    return pivotIndex;
}

async function swap(i, j) {
    await sleep(400);
    let temp = rectangles[i].value;
    rectangles[i].value = rectangles[j].value;
    rectangles[j].value = temp;
}

function sleep(time) {
    return new Promise(function (resolve) { setTimeout(resolve, time) });
}

// let arr = [5, 3, 6, 4, 8, 1, 2];
// quickSort(arr, 0, arr.length);


// function quickSort(start, end) {
//     if (start < end) {
//         let pivot = partition(start, end);
//         quickSort(start, pivot);
//         quickSort(pivot + 1, end);
//     }
// }

// function partition(start, end) {
//     let pivot = rectangles[start].value;
//     let pivotIndex = start;
//     rectangles[start].state = 0;
//     for (let i = start + 1; i < end; i++) {
//         rectangles[start].state = 1;
//         if (pivot > rectangles[i].value) {
//             pivotIndex++;
//             swap(i, pivotIndex);
//         }
//         rectangles[start].state = -1;
//     }
//     rectangles[start].state = 0;
//     rectangles[pivotIndex].state = 1;

//     swap(start, pivotIndex);

//     rectangles[start].state = -1;
//     rectangles[pivotIndex].state = -1;

//     return pivotIndex;
// }

// function swap(i, j) {
//     let temp = rectangles[i].value;
//     rectangles[i].value = rectangles[j].value;
//     rectangles[j].value = temp;
// }