// ======== ? Implement quicksort to sort an array of strings by length

// function partition(arr, low, high) {
    
//     let pivot = arr[high]

//     let i = low - 1
//     for (let j = low; j < high; j++) {
//         if (arr[j].length < pivot.length) {
//             i++
//             [arr[j], arr[i]] = [arr[i], arr[j]]
//         }
//     }
//     [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
//     return i + 1
// }

// function quickSort(arr, low = 0, high = arr.length - 1) {
//     if (low < high) {
//         let pi = partition(arr, low, high)

//         quickSort(arr, low, pi - 1)
//         quickSort(arr, pi + 1, high)

//     }
//     return arr
// }


// console.log(quickSort(["apple", "banana", "pear", "grape", "kiwi"]))
