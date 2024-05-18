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

//recursive approach

function factorial(n) {
  if (n < 1) return 1;
  return n * factorial(n - 1);
}
let n = 5;
console.log(factorial(n));

/*
iterative approach -> one direction one way path travelling
recursive approach -> multi direction multiple way path travelling
*/
