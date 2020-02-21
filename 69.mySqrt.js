/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // if(x==1) return 1
    // let min = 0 
    // let max = x
    // while(max- min >1){
    //     let mid = (max+min)/2
    //     if (x/mid <mid){
    //         max = mid
    //     }else{
    //         min = mid
    //     }
    // }
    // return parseInt(min)
    return parseInt(Math.sqrt(x))
};

const x = 8
console.log(mySqrt(x))