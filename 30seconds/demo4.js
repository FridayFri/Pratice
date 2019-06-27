
const words = (str,pattern = /[^a-zA-Z-]+/)=>{
  return str.split(pattern);
}
console.log(words('i love javascript!'))