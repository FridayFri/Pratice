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

// 腾讯云
var locationList = [
  { id: 0, name: "中国" },
  { id: 1, pid: 0, name: "广东省" },
  { id: 2, pid: 1, name: "深圳市" },
  { id: 3, pid: 1, name: "广州市" },
];

function buildTree(list) {
  const root = list.find((item) => !item.pid);
  function build(node) {
    node.subLocations = list.filter((item) => {
      return item.pid === node.id;
    });
    node.subLocations.length &&
      node.subLocations.forEach((item) => {
        build(item);
      });
  }
  build(root);

  return root;
}

console.log(buildTree(locationList));
