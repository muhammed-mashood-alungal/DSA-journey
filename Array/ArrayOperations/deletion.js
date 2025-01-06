///================== Delete an Element from the Beginning of an Array 
// const arr =[10, 20, 30, 40, 50]

// for(let i=0 ; i < arr.length ; i++){
//     arr[i]=arr[i+1]
// }
// arr.length--
// console.log(arr)



//=================== Delete an Element from a Given Position in an Array

// const arr=[5, 15, 25, 35, 45]
// const pos=2

// for(let i=2 ; i < arr.length ; i++){
//     arr[i]=arr[i+1]
// }
// arr.length--
// console.log(arr)



//===================  Delete First Occurrence of a Given Element from an Array

// const arr=[3, 8, 12, 8, 15, 8]
// const val=8

// for(let i=0 ; i< arr.length ; i++){
//     if(arr[i]==val){
//         for(let j=i ; j < arr.length-1 ; j++){
//             arr[j]=arr[j+1]
//         }
//         break;
//     }

// }
// arr.length--
// console.log(arr)


//=============== Remove All Occurrences of an Element in an Array

// const arr = [3, 8, 12, 8, 15, 8]
// const val = 8
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == val) {
//         for (let j = i; j < arr.length - 1; j++) {
//             arr[j] = arr[j + 1]
//         }
//         arr.length--
//     }
// }
// console.log(arr)

/// ==== inserting at beginning 
// const arr = [3, 8, 12, 8, 15, 8]
// arr.length++
// for(let i = arr.length -1 ; i > 0 ; i--){
//     arr[i] = arr[i-1]
// }
// arr[0]=100
// console.log(arr)

const arr = [3, 8, 12, 8]
let left = 0
let right = arr.length - 1

while (left <= right) {
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    left++
    right--
}

console.log(arr)
