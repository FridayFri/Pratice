let script = document.createElement("script");
script.src = "http://www.baidu.cn/login?username=JasonShu&callback=callback";
document.appendChild(script);

function callback(res) {
  console.log(res);
}
