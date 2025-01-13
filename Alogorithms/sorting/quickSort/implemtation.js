// function quickSort(arr, low = 0, high = arr.length - 1) {
//     if (low < high) {
//         const pIdx = partition(arr, low, high)

//         quickSort(arr, low, pIdx - 1)
//         quickSort(arr, pIdx + 1, high)
//     }
//     return arr
// }

// function partition(arr,low,high) {
//     let pivot = arr[low]
//     let i = low
//     let j = high
//     // Hoare's Partition
//     while (i < j) {
//         while ( i < j && arr[i] <= pivot) {
//             i++
//         }
//         while (arr[j] > pivot ) {
//             j--
//         }
//         if (i < j) swap(arr, i, j)
//      } 
//      swap(arr,low , j)
//      return j
// }
// function swap(arr,idx1,idx2){
//     let temp = arr[idx1]
//     arr[idx1] = arr[idx2]
//     arr[idx2] = temp
// }




// ============ Pivot as random element
// function swap(arr, idx1, idx2) {
//     let temp = arr[idx1]
//     arr[idx1] = arr[idx2]
//     arr[idx2] = temp
// }

// function partition(arr, low, high) {

//     const randomIndex = Math.floor(Math.random() * (high - low + 1)) + low

//     let temp = arr[randomIndex]
//     arr[randomIndex] = arr[high]
//     arr[high] = temp
//     let pivot = temp
//     let i = low - 1

//     for (let j = low; j < high; j++) {
//         if (arr[j] < pivot) {
//             i++
//             [arr[i], arr[j]] = [arr[j], arr[i]]
//         }
//     }
//     [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]

//     return i + 1


// }





