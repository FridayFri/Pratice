// [1,2,3,4]求平均值
// var arr = [1,2,3,4]
// const pj = function(array){
//   var sum = 0
//   var len = array.length
//   for(let i = 0;i< len;i++){
//     sum = sum+array[i]
//     console.log(sum)
//   }
//     return sum/len
// }
// console.log(pj(arr))
const average = (...nums)=>nums.reduce((acc,val)=>{
  acc+val},0)/nums.length
console.log(average(...[1,2,3,4]))