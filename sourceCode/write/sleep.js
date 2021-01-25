function sleep(wait) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, wait);
  });
}

let sayHello = (name) => console.log(`hello ${name}`);

async function autoRun() {
  await sleep(3000);
  let demo1 = sayHello("aaa");
  let demo2 = sayHello("bbb");
  let demo3 = sayHello("ccc");
}

autoRun();
