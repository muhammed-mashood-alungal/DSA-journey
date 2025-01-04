/// Write a function that finds the smallest number greater than the target in a sorted array using binary search.
/*
function findSmallestGreaterThan(arr,target){
   let left = 0
   let right = arr.length -1
   let result;
   while(left <= right){
    mid = Math.floor((left+right)/2)

    if(arr[mid] > target ){
      result = arr[mid]
      right = mid -1
    }else{
      left = mid + 1
    }
   }
   return result
}
console.log(findSmallestGreaterThan([1, 2, 5, 8, 10, 12],6))
*/

/// Write a function that finds the first occurrence of 
//  a number in a sorted array that may contain duplicates using binary search.


const binarySearchFirstOccurrence = (arr, target) => {
  let left = 0
  let right = arr.length - 1
  let result = -1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] == target) {
      result = mid
      right = mid - 1
    } else if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return result

}

console.log(binarySearchFirstOccurrence([1, 2, 2, 2, 3, 4],2))