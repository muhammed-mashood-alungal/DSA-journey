//  Write a function to replace each alphabet in the given string with another alphabet occurring
// at the n-th position from each of them.


// function main(string,shift){
//     let result = ""
//     for(let i = 0 ; i < string.length  ;i++){
//         let charCode = string.charCodeAt(i)
//        if(charCode >= 65 && charCode <=122){
//          result += String.fromCharCode(charCode+shift)
//        }else{
//         result  += string[i]
//        }
//     }
//     return string
// }
// main("Hello, world!",2)


//String: "hello, world!"
//Shift: 2
// Output: "jgnnq, yqtnf!"


// ============= Q : Print Longest substring without repeating characters

function findLongest(s) {
  let left = right = 0
  let n = s.length
  let max = 0
  const map = {}
  let start = 0
  while (right < n) {
    if (map[s[right]] != undefined) {
      if (map[s[right]] >= left) {
        left = map[s[right]] + 1
      }
    }
    
    map[s[right]] = right

    if(right - left + 1 > max){
      max = right - left + 1
      start = left
    }
    right++
  }
  return s.substring(start , start + max)

}
console.log(findLongest("geeksforgeeks"))