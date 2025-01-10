function findKthSmallest(arr, k) {
    if(k <= 0 || arr.length < k ){
        return null
    }
    for (let i = 0; i < arr.length; i++) {
        let minIdx = i

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j
            }
        }
        let temp = arr[minIdx]
        arr[minIdx] = arr[i]
        arr[i] = temp
        if (i + 1 == k) {
            return arr[i]
        }
    }
    return null

}
console.log(findKthSmallest([7, 10, 4, 3, 20, 15], 3))