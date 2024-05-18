//Reverse a given string
let str = "dhamu";
str = str.split("");
for (let start = 0, end = str.length - 1; start < end; start++, end--) {
  let char = str[start];
  str[start] = str[end];
  str[end] = char;
}
console.log(str); //[ 'u', 'm', 'a', 'h', 'd' ]
console.log(str.join("")); //umahd

/*
note:
strings are immutable so couldn't swap so change to array using split function then join 
*/
