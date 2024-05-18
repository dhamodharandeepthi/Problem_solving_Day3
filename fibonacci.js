/*   
  0 1 1 2 3 5 8 13 21 34 55 89
          n
fibonacci(0)=>0 //n
fibonacci(1)=>1 //n
fibonacci(2)=>fibonacci(1)+fibonacci(0) //f(n-1) + f(n-2)
fibonacci(3)=>fibonacci(2)+fibonacci(1)
fibonacci(n)=>fibonacci(n-1)+fibonacci(n-2)
*/

function fibonacci(n, prev, curr) {
  if (n === 0) {
    return prev;
  } else if (n === 1) {
    return curr;
  } else {
    return fibonacci(n - 1, curr, prev + curr);
  }
}

console.time("fibo");
console.log(fibonacci(10, 0, 1)); // Output: 55
console.timeEnd("fibo"); //4.39ms

console.time("fibo");
console.log(fibonacci(40, 0, 1)); // Output: 102334155
console.timeEnd("fibo"); //0.886ms

console.time("fibo");
console.log(fibonacci(50, 0, 1)); // Output: 12586269025
console.timeEnd("fibo"); //0.378ms
