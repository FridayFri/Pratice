function createArr(n) {
  const res = new Set();
  for (let i = 0; i < 1; ) {
    const item = Math.ceil(Math.random() * n);
    res.add(item);
    if (res.size === n) {
      return [...res];
    }
  }
}
console.log(createArr(99));
