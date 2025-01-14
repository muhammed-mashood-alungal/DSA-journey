// function bubbleSort(arr){
//      for(let i =0 ; i < arr.length - 1 ; i++){
//         for(let j = 0 ;  j < arr.length - i- 1 ; j++){
//            if(arr[j] > arr[j+1]){
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1]= temp
//            }
//         }
//      }
//      return arr
// }

// console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]))


//// ========== ? Sort a word ====
// function bubbleSort(word){
//     const arr = word.split("")
//     for(let i =0 ; i < arr.length - 1 ; i++){
//        for(let j = 0 ;  j < arr.length - i- 1 ; j++){
//           if(arr[j] > arr[j+1]){
//            let temp = arr[j]
//            arr[j] = arr[j+1]
//            arr[j+1]= temp
//           }
//        }
//     }
//     return arr.join("")
// }

// console.log(bubbleSort("brocamp"))

//===== ? Problem to terminate the sorting whenever the array is sorting before all comparisons.

// function detectingEarlyTermination(arr) {
//     count = 0
//     for (let i = 0; i < arr.length - 1; i++) {
//         swapped = false

//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//                 swapped = true

//             }
//             count++
//         }

//         if (swapped == false) {
//             break
//         }
//     }
//     console.log("Number of comparisons:", count)
//     return arr
// }
// console.log(detectingEarlyTermination([1, 1, 2, 2, 7, 2]))



