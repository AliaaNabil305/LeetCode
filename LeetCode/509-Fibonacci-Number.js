/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n===0){return 0}
    if(n===1){return 1}
    var x= fib(n-1)
    var y= fib(n-2)

return x+y
};