//  Write a function to replace each alphabet in the given string with another alphabet occurring
// at the n-th position from each of them.


function main(string,shift){
    let result = ""
    for(let i = 0 ; i < string.length  ;i++){
        let charCode = string.charCodeAt(i)
       if(charCode >= 65 && charCode <=122){
         result += String.fromCharCode(charCode+shift)
       }else{
        result  += string[i]
       }
    }
    return string
}
main("Hello, world!",2)
 

//String: "hello, world!"
//Shift: 2
// Output: "jgnnq, yqtnf!"