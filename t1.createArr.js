function createArr(n) {
  const res = new Set();
  while (true) {
    const item = Math.ceil(Math.random() * n);
    res.add(item);
    if (res.size === n) {
      return [...res];
    }
  }
}
console.log(createArr(99));
