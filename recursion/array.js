// function removeDuplicates(arr , index=0 , result = [] ){
//    if(index == arr.length ) return result

//    if(!result.includes(arr[index])){
//     result.push(arr[index])
//    }
//    return removeDuplicates(arr , index+1 , result)
// }

// console.log(removeDuplicates([1,1,2,2,4,2,5]))


//=============== Reverse an Array Using Recursion : 

// function reverse(arr , left = 0, right = arr.length-1){
//    if(left >= right ) return arr

//    let temp = arr[left]
//    arr[left] = arr[right]
//    arr[right] = temp

//    return reverse(arr,left+1, right - 1)
// }
// console.log(reverse([1,2,3,4,5]))


/// ============= Find the Sum of All Elements in an Array Using Recursion

// function sumOfElements(arr, index = 0, sum = 0) {
//     if (arr.length == index) return sum

//     sum += arr[index]

//     return sumOfElements(arr , index+1 , sum)

// }
// console.log(sumOfElements([1,2,3,4,5] ))


/// ============= Count the Occurrences of a Specific Element in an Array Using Recursion

// function findOccurance(arr,target, index =0 , count = 0){
//     if(arr.length == index) return count

//     if(arr[index] == target){
//         count++
//     }
//     return findOccurance(arr,target, index+1 , count)
     
// }
// console.log(findOccurance([1,1,2,2,2,4,2,5],2))

