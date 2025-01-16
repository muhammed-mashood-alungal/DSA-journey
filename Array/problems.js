// Check the array is sorted or not in o(n) complexity

function isSorted(arr){
    for(let i = 1 ; i < arr.length ; i++){
     if(arr[i] < arr[i-1]){
         return false
     }
    }
     return true
 }
 console.log(isSorted([1, 2, 3, 4, 5])); // true
 console.log(isSorted([1, 3, 2, 4, 5])); // false
 console.log(isSorted([5, 4, 3, 2, 1])); // false
 console.log(isSorted([]));  