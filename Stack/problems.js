// function nextGreatestElement(arr){
//     let nge =[]
//     let st = []
//      for(let i = arr.length -1 ; i >= 0 ; i--){
//         while(st.length != 0 && arr[i] >= st[st.length - 1]){
//             st.pop()
//         }
//         if(st.length == 0){
//            nge[i] = -1
//         }else{
//             nge[i] = st[st.length - 1]
//         }
//         st.push(arr[i])
//      }
//      return nge
// }
// console.log(nextGreatestElement([1,12,5,3,1,2,5,3,1,2,4,6]))


/// ========== ? Sort a stack using temp stack

// function sortStack(stack){
//     let sortedStack = []

//     while(stack.length > 0 ){ 
//         let temp = stack.pop()

//         while(sortedStack.length > 0 && sortedStack[sortedStack.length-1] < temp){
//             stack.push(sortedStack.pop())
//         }

//         sortedStack.push(temp)
//     }
//     while(sortedStack.length > 0){
//          stack.push(sortedStack.pop())
//     }
//     return stack
// }

// let stack = [3, 1, 4, 2, 5];
// let sortedStack = sortStack(stack);
// console.log(sortedStack); // Output: [1, 2, 3, 4, 5]

///========== ? Program to Check if a Given String is a Palindrome Using a Stack?

// function isPalindrome(str){

//     let stack = []
//     for(let i = 0 ; i < str.length ; i++){
//         stack.push(str[i])
//     }
//     let i = 0 
//     while(stack.length > 0){
//         if(stack.pop() != str[i]){
//             return false

//         }
//         i++
//     }
//     return true
// }

// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello"));   // false
// console.log(isPalindrome("madam"));   // true

// function reverseString(str){
//   const stack = []
//   for(let i = 0 ; i < str.length ; i++){
//        stack.push(str[i])
//   }
//   let res=""
//   while(stack.length > 0){
//     res += stack.pop()
//   }
//   return res
// }
// console.log(reverseString("hello"))