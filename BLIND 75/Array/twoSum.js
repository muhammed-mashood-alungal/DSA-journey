/// Brute Force Solution

// function twoSum(nums,target){
//     for(let i = 0 ; i < nums.length ; i++){
//         let num = nums[i]
        
//         for(let j = 0 ; j < nums.length ; j++){
//             if(num + nums[j] == target){
//                 return [num , nums[j]]
//             }
//         }
//     }
//     }
// console.log(twoSum(nums,target))


/// Efficient Solution using hashset

// function getElements(nums,target){
//     const set = new Set()
//     for(let i = 0 ; i < nums.length ; i++){
//         if(set.has(target - nums[i])){
//             return [nums[i],target - nums[i]]
//         }else{
//             set.add(nums[i])
//         }
//     }
// }




