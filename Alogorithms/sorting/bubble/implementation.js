function bubbleSort(arr){
     for(let i =0 ; i < arr.length - 1 ; i++){
        for(let j = 0 ;  j < arr.length - i- 1 ; j++){
           if(arr[j] > arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1]= temp
           }
        }
     }
     return arr
}

console.log(bubbleSort([1,4,5,2,1,5,6]))