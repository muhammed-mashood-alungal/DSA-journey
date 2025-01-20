function heapify(arr,n,i){
    let li = i*2+1
    let ri = i*2+2  
    let largest = i 
    if(li < n && arr[li] > arr[largest]){
        largest = li
    }
    if(ri < n && arr[ri] > arr[largest]){
        largest = ri
    }

    if(largest != i){
        let temp = arr[largest]
        arr[largest] = arr[i]
        arr[i] = temp

        heapify(arr,n, largest)
     }
}
function heapSort(arr){
    let n = arr.length

    for(let i = Math.floor(n/2) ; i >= 0 ; i--){
      heapify(arr,n,i)
    }

    for(let i = n-1 ; i >0 ; i--){
        let temp = arr[0]
        arr[0] = arr[i]
        arr[i] = temp

        heapify(arr,i,0)
    }
    return arr
    
}
const arr=[7, 2, 9, 2, 7]
console.log(heapSort(arr))
