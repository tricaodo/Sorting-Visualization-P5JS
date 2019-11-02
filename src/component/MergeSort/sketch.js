import Rectangle from '../../rectangle';

export default function sketch(p) {
    let rectangles = [];
    let rectWidth = 10;
    let temp = [];
    p.setup = function () {

        p.createCanvas(1000, 390);
        let numOfRects = Math.floor(1000 / rectWidth);
        for (let i = 0; i < numOfRects; i++) {
            let rectangle = new Rectangle(Math.floor(p.random(10, 390 - 40)));
            rectangles.push(rectangle);
        }
        console.log(rectangles[0].value);
        mergeSort(rectangles, temp, 0, rectangles.length - 1);
    };

    p.draw = function () {
        p.background("#ffffff");
        for (let i = 0; i < rectangles.length; i++) {
            // if (rectangles[i].state == -1) {
                p.fill("#05c46b"); // default green
            // }
            p.rect(i * rectWidth, 390 - rectangles[i].value - 40, rectWidth, rectangles[i].value, 8, 8, 0, 0);
        }
    };

    async function mergeSort(arr, temp, leftStart, rightEnd) {
        if (leftStart < rightEnd) {
            let mid = Math.floor((leftStart + rightEnd) / 2);
            Promise.all(
                [mergeSort(arr, temp, leftStart, mid)],
                [mergeSort(arr, temp, mid + 1, rightEnd)]
            );
            await merge(arr, temp, leftStart, mid, rightEnd);
        }
    }
}

async function merge(array, temp, leftStart, mid, rightEnd) {
    let start = leftStart;
    let leftEnd = mid;
    let rightStart = mid + 1;

    while (leftStart <= leftEnd && rightStart <= rightEnd) {
        if (array[leftStart].value <= array[rightStart].value) {
            temp.push(array[leftStart]);
            leftStart++;
        } else {
            temp.push(array[rightStart]);
            rightStart++;
        }
    }
    while (leftStart <= leftEnd) {
        temp.push(array[leftStart]);
        leftStart++;
    }
    // while (j < rightArr.length) {
    //     res.push(rightArr[j]);
    //     j++;
    // }
    for (let i = start; i <= rightEnd; i++) {
        array[i] = temp[i];
    }

}

function sleep(time) {
    return new Promise(function (resolve) { setTimeout(resolve, time) });
}

