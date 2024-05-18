//what is recursive function?
// A function that calls itself again and again until a specific condition meet

//print 1-10?

//iteratative approach
let n = 10;
for (let ind = 1; ind <= n; ind++) {
  //   console.log(ind); // 1 2 3 4 5 6 7 8 9 10
}

//recursive approach
function printTill(n, ind) {
  if (ind > n) return false;
  console.log(ind); // 1 2 3 4 5 6 7 8 9 10
  printTill(n, ind + 1);
}
printTill(10, 1);
