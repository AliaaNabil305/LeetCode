/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let i=0, j=0;
    let starIdx=-1;
    let matchIdx=-1;

    while(i<s.length){
        if(j<p.length && (p[j]==s[i]||p[j]=='?')){
            i++
            j++
        }
        else if(j<p.length && p[j]=='*'){
            starIdx=j
            matchIdx=i
            j++
        }
        else if(starIdx != -1){
            j=starIdx+1
            matchIdx++
            i=matchIdx
        }
        else{
            return false 
        }
    }
    while(j<p.length && p[j]=='*'){
        j++
    }
    return j==p.length
};