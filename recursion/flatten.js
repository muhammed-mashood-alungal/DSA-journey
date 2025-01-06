function flatten(arr,index =0,result =[]){
    if(arr.length == index) return result
    if(Array.isArray(arr[index])){
        result = result.concat(flatten(arr[index]))
    }else{
        result.push(arr[index])
    }

    return flatten(arr,index+1 , result)
}
console.log(flatten([1, [2, 3], [4, [5, 6]]]))