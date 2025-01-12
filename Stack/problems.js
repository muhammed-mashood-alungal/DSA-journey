function nextGreatestElement(arr){
    let nge =[]
    let st = []
     for(let i = arr.length -1 ; i >= 0 ; i--){
        while(st.length != 0 && arr[i] >= st[st.length - 1]){
            st.pop()
        }
        if(st.length == 0){
           nge[i] = -1
        }else{
            nge[i] = st[st.length - 1]
        }
        st.push(arr[i])
     }
     return nge
}
console.log(nextGreatestElement([1,12,5,3,1,2,5,3,1,2,4,6]))