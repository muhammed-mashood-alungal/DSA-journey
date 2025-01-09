function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pIdx = partition(arr, low, high)

        quickSort(arr, low, pIdx - 1)
        quickSort(arr, pIdx + 1, high)
    }
    return arr
}

function partition(arr, low, high) {
    let pivot = arr[low]
    let i = low
    let j = high
    while (i < j) {
        while ( i < j && arr[i] <= pivot) {
            i++
        }
        while (arr[j] > pivot ) {
            j--
        }
        if (i < j) swap(arr, i, j)
    }
     swap(arr,low , j)
     return j
}
function swap(arr,idx1,idx2){
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

console.log(quickSort([2,3,1,4,5,6,3,2,1]))