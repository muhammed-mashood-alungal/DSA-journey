function binarySearch(arr, key) {
    let low = 0
    let high = arr.length

    while (high >= low) {
        mid = low+Math.floor((high - low) / 2)

        if (arr[mid] == key) {
            return mid
        }

        if (arr[mid] > key) {
            high = mid - 1
        }else{
            low = mid+1
        }
    }
    return -1
}
console.log(binarySearch([1,2,3,4,5,6],4))