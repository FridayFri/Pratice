
function transform(obj){
    let res = new Array(12).fill(null)
    for(let index in obj){
        res[index-1] = obj[index]
    }
    return res
}


const obj = {
    1:222,
    2:123,
    5:888
}
console.log(transform(obj))