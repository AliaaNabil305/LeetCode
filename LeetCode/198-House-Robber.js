/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length===0){return 0}
    if(nums.length===1){return nums[0]}
    let prev1=0
    let prev2=0
    for(let i=0;i<nums.length;i++)
    {
        let temp=prev1
        prev1=Math.max(prev1,prev2+nums[i])
        prev2=temp
    }

    return prev1
};