import Rectangle from '../../rectangle';

export default function sketch(p) {
    let rectangles = [];
    let rectWidth = 10;

    p.setup = function () {
        
        p.createCanvas(1000, 390);
        let numOfRects = Math.floor(1000 / rectWidth);
        for (let i = 0; i < numOfRects; i++) {
            let rectangle = new Rectangle(Math.floor(p.random(10, 390 - 40)));
            rectangles.push(rectangle);
        }
        mergeSort(rectangles);
    };

    p.draw = function () {
        
        p.background("#ffffff");
        for (let i = 0; i < rectangles.length; i++) {
            if (rectangles[i].state == -1) {
                p.fill("#05c46b"); // default green
            }
            p.rect(i * rectWidth, 390 - rectangles[i].value - 40, rectWidth, rectangles[i].value, 8, 8, 0, 0);
        }
    };

    async function mergeSort(arr) {
        if(arr.length <= 1) {
            return arr;
        }
        let mid = Math.floor((arr.length) / 2);
        
        let leftArr = await mergeSort(arr.slice(0, mid));
        await sleep(800);
        let rightArr = await mergeSort(arr.slice(mid));
        await sleep(800);
        return merge(leftArr, rightArr);
    }

    function merge(leftArr, rightArr) {
        let i = 0;
        let j = 0;
        let res = [];
        
        while ((i < leftArr.length) && (j < rightArr.length)) {
            if (leftArr[i].value <= rightArr[j].value) {
                res.push(leftArr[i]);
                i++;
            }
            else {
                res.push(rightArr[j]);
                j++
            }
        }
        while(i < leftArr.length){
            res.push(leftArr[i]);
            i++;
        }
        while (j < rightArr.length) {
            res.push(rightArr[j]);
            j++;
        }
        rectangles = res;
        return rectangles;
    }

    async function swap(i, j) {

        await sleep(400);
        let temp = rectangles[i].value;
        rectangles[i].value = rectangles[j].value;
        rectangles[j].value = temp;

        rectangles[i].state = -1; //
        rectangles[j].state = -1;
    }

    function sleep(time) {
        return new Promise(function (resolve) { setTimeout(resolve, time) });
    }
}
