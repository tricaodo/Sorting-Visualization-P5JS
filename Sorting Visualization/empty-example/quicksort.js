function partition(arr, start, end){
    let pivot = arr[start];
    let pivotIndex = start;
    for(let i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            pivotIndex++;
            swap(arr, i, pivotIndex);
        }
    }
    swap(arr, start, pivotIndex);
    return pivotIndex;
}

function quickSort(arr, start = 0, end = arr.length){
    if(start < end){
        let pivot = partition(arr, start, end);
        quickSort(arr, start, pivot - 1);
        quickSort(arr, pivot + 1, end);
    }
    return arr;
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [4,8,2,1,5,7,6,3];
quickSort(arr);
console.log(arr);