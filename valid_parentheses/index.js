/*let arr = []; //数据集合
arr.push("{");
 console.log(arr,arr.length);
console.log(typeof arr);
arr.push("}");
 console.log(arr);
arr.pop();
 console.log(arr);
 arr.unshift("]");
arr.shift();
console.log('----',arr);
arr.forEach(item =>{
    console.log(item);
})*/
// 如何来做匹配规则
let obj = {};
obj["{"] = "}";
obj["("] = ")";
obj["["] = "]";
let sta = ["("];
let s = ")";
if( obj[sta[sta.length-1]]===s){
    sta.pop();
}
    console.log(sta.length);
// else{
//     sta.push();
// }
// console.log(sta)