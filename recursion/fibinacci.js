function fibinacci(n){
    if(n <= 1){
        return n
    }

    return fibinacci(n-1) + fibinacci(n-2)
}
console.log(fibinacci(6))