class MyPromise {
  constructor(run) {
    this.observerList = [];
    console.log('observerList', this.observerList)
    const notifyAll = (value) =>
      this.observerList.forEach((callback) => callback(value));
    run(notifyAll);
  }
  subscribe(callback) {
    this.observerList.push(callback);
  }
}

const p = new MyPromise((resolve) => {
  resolve(222);
  console.log(111);
});

p.subscribe((data) => console.log(data));
