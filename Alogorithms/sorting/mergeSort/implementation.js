// function mergeSort(arr, low = 0, high = arr.length - 1) {

//     if (low >= high) return arr

//     let mid = Math.floor((low + high) / 2)
//     mergeSort(arr, low, mid)
//     mergeSort(arr, mid + 1, high)
//     merge(arr, low, mid, high)
// }

// function merge(arr, low, mid, high) {
//     let i = low
//     let j = mid + 1
//     let temp = []
//     while (i <= mid && j <= high) {
//         if (arr[i] < arr[j]) {
//             temp.push(arr[i])
//             i++
//         } else {
//             temp.push(arr[j])
//             j++
//         }
//     }
//     while (i <= mid) {
//         temp.push(arr[i])
//         i++
//     }
//     while (j <= high) {
//         temp.push(arr[j])
//         j++
//     }
//     for (let k = 0; k < temp.length; k++) {
//         arr[low + k] = temp[k];
//     }
// }



function mergeSort(arr, low = 0, high = arr.length - 1) {
    if (low >= high) return arr

    let mid = Math.floor((low + high) / 2)
    mergeSort(arr, low, mid)
    mergeSort(arr, mid + 1, high)

    merge(arr, low, mid, high)
}
function merge(arr, low, mid, high) {
    let i = low
    let j = mid + 1
    let temp = []

    while (i <= mid && j <= high) {
        if (new Date(arr[i]) < new Date(arr[j])) {
            temp.push(arr[i])
            i++
        } else {
            temp.push(arr[j])
            j++
        }
    }
    while (i <= mid) {
        temp.push(arr[i])
        i++
    }
    while (j <= high) {
        temp.push(arr[j])
        j++
    }

    for (let k = 0; k < temp.length; k++) {
        arr[low + k] = temp[k]
    }
}


const dates = [
    "2025-01-12",
    "2024-05-21",
    "2023-11-18",
    "2023-12-25",
    "2024-06-30"
];
const arr = [1, 2, 45, 32, 42, 1, 4, 5]
mergeSort(dates)
console.log(dates)
