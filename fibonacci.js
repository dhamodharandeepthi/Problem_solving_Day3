/*   
  0 1 1 2 3 5 8 13 21 34 55 89
          n
fibonacci(0)=>0 //n
fibonacci(1)=>1 //n
fibonacci(2)=>fibonacci(1)+fibonacci(0) //f(n-1) + f(n-2)
fibonacci(3)=>fibonacci(2)+fibonacci(1)
fibonacci(n)=>fibonacci(n-1)+fibonacci(n-2)
*/

//recursive approach
function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
let n = 10;
console.time("fibo");
console.log(fibonacci(n)); //55
console.timeEnd("fibo"); //1.8ms
