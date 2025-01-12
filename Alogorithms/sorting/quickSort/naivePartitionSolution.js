

// This is the Naive solution for partitioning a array 
function naivePartition(arr, low = 0, high = arr.length - 1) {

    let pivot = arr[high];

    let temp = [];

    for (let i = low; i < high; i++) {
        if (arr[i] <= pivot) {
            temp.push(arr[i]);
        }
    }

    temp.push(pivot);
    let pivotIndex = temp.length - 1;

  
    for (let i = low; i < high; i++) {
        if (arr[i] > pivot) {
            temp.push(arr[i]);
        }
    }

    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
    console.log(arr, pivotIndex)

    return pivotIndex;
}

naivePartition([5, 1, 5, 5, 1, 5, 16, 7, 2, 5]);
