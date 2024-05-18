//what is factorial?
/*
The factorial of a number is the sum of the multiplication, of all the whole numbers,from our specified number down to 1
0!=1
1!=1
2!=2*1=>2*1!
3!=3*2*1=>3*2!
4!=4*3*2*1=>4*3!
5!=5*4*3*2*1=>5*4!
n!=n*n-1*n-2*n-3....

n!=n*(n-1)!
*/

//tail call recursive

function factorial(n, x) {
  if (n < 1) return x;
  return factorial(n - 1, n * x);
}
let n = 5;
console.log(factorial(n, 1));

/*
iterative approach -> one direction one way path travelling
recursive approach -> multi direction multiple way path travelling
normal recursive function takes time and space so to optimize that we use tail call recursive function
*/
