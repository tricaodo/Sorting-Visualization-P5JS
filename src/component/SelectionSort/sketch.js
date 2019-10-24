import Rectangle from '../../rectangle.js';

export default function sketch (p) {
    let rectangles = [];
    let rectWidth = 20;

    p.setup = function () {
        p.createCanvas(600, 390);
        let numOfRects = Math.floor(500 / rectWidth);
        for (let i = 0; i < numOfRects; i++) {
            let rectangle = new Rectangle(Math.floor(p.random(10, 390 - 100)));
            rectangles.push(rectangle);
        }
        selectionSort();
    };

    p.draw = function () {
        p.background("#ffffff");
        for (let i = 0; i < rectangles.length; i++) {
            if(rectangles[i].state == -1){
                p.fill("#78e08f");
            }else if(rectangles[i].state == 0){
                p.fill("#ff6b81");
            }else if(rectangles[i].state == 2){
                p.fill("#feca57");
            }else{
                p.fill("#17c0eb");
            }          
            p.rect(i * rectWidth, 390 - rectangles[i].value - 40, rectWidth, rectangles[i].value, 8, 8, 0, 0);
        }
    };

    async function selectionSort(){
        for(let i = 0; i < rectangles.length; i++){
            let lowest = i;
            for(let j = i + 1; j < rectangles.length; j++){
                rectangles[j].state = 3;
                if(rectangles[j].value < rectangles[lowest].value){
                    lowest = j;
                }

            }
            rectangles[i].state = -1;
            if(lowest != i){
                rectangles[i].state = 0;
                rectangles[lowest].state = 0;
                await swap(lowest, i);
                rectangles[i].state = -1;
                rectangles[lowest].state = -
            }
        }
    }

     async function swap(i, j) {
        await sleep(1000);
        let temp = rectangles[i].value;
        rectangles[i].value = rectangles[j].value;
        rectangles[j].value = temp;
        
    }

    function sleep(time) {
        return new Promise(function (resolve) { setTimeout(resolve, time) });
    }
}
