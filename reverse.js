//Reverse a given string
let str = "dhamu";

function helper(str, start) {
  if (str.length == start) return "";
  return helper(str, start + 1) + str[start];
}
function reverse(str) {
  return helper(str, 0);
}

console.log(reverse(str)); //umahd
