/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index1=0;
    for(var index2=0;index2<nums.length;index2++){
        if(nums[index1]!==nums[index2]){
            index1++;
            nums[index1]=nums[index2]
        }
    }
    return index1+1
};