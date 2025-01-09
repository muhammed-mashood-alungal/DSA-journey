function selectionSort(arr){
    for(let i = 0 ;  i < arr.length -1  ; i++){
        let minIdx = i
      for(let j = i +1 ; j < arr.length ; j++){
        if(arr[j] < arr[minIdx]){
            minIdx = j
        }
      }
      let temp = arr[minIdx]
      arr[minIdx] = arr[i]
      arr[i] = temp
    }
    return arr
}

console.log(selectionSort([5,4,21,4,3,1,5,4]))