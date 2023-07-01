//const regex = new RegExp('pattern');

const regex = /pattern/;

const str = "The quick brown fox jumps over the lazy dog";
const newStr = str.replace(/the/gi, 'a');

console.log(str)
console.log(newStr)

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;