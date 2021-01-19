const tree = [
  { name: "A" },
  { name: "B", children: [{ name: "A" }, { name: "AA", children: [] }] },
  { name: "C" },
];
function filterTree(tree, str) {
  const res = [];
  tree.forEach((item) => {
    if (item.name === str) {
      res.push(item);
    } else {
      item.children &&
        item.children.length &&
        filterTree(item.children, str).length &&
        filterTree(item.children, str) &&
        res.push({ ...item, children: filterTree(item.children, str) });
    }
  });
  return res;
}

console.log(filterTree(tree, "A"));
