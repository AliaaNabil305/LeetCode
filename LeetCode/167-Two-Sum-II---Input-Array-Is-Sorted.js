/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let index1=0;
    let index2=numbers.length-1;
    while(index2>index1){
        if(target===(numbers[index1]+numbers[index2])){
            return [index1 + 1,index2 + 1]
        }
        else if(target>(numbers[index1]+numbers[index2])){
            index1 ++;
        }
       else {
            index2--; 
        }
    }

};