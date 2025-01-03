const arr=[1,4,2,5,6,7,8]
function search(key){
    for(let i =0 ; i < arr.length ; i++){
         if(arr[i]== key){
            return i
         }
    }
    return -1
}
console.log(search(8)) 