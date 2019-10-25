import Rectangle from '../../rectangle.js';

export default function sketch (p) {
    let rectangles = [];
    let temp = [];
    let rectWidth = 10;

    p.setup = function () {
        p.createCanvas(1000, 390);
        let numOfRects = Math.floor(1000 / rectWidth);
        for (let i = 0; i < numOfRects; i++) {
            let rectangle = new Rectangle(Math.floor(p.random(10, 390 - 40)));
            rectangles.push(rectangle);
        }
        mergeSort(0, rectangles.length);
    };

    p.draw = function () {
        p.background("#ffffff");
        for(let i = 0; i < rectangles.length; i++){
            if (rectangles[i].state == -1) {
                p.fill("#05c46b"); // default green
            }            
            p.rect(i * rectWidth, 390 - rectangles[i].value - 40, rectWidth, rectangles[i].value, 8, 8, 0, 0);
        }
    };

    function mergeSort(start, end){
        if(start < end){
            let mid = (start + end) / 2;
            mergeSort(start, mid);
            mergeSort(mid + 1, end);
            merge(start, mid, end);
        }
    }

    function merge(start, mid, end){
        for(let i = 0; i < rectangles.length; i++){
            temp[i] = rectangles[i];        
        }
        let i = start;
        let j = mid + 1;
        let idx = start;

        
        // while(i <= mid && j <= end){
        //     if(temp[i].value <= temp[j].value){
        //         rectangles[idx++] = temp[i++];
        //     }else{
        //         rectangles[idx++] = temp[j++];
        //     }
        // }
        // while(i <= mid){
        //     rectangles[idx++] = temp[i++];
        // }
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
