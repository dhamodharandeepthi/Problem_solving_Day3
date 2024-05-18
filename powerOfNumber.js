/*
num1=2;
num2=5;
                             2  *  5 - 1
2**5=>2*2*2*2*2 =>2*(2**4) num1 * num2-1
2**4=>2*2*2*2 =>2*(2**3)   num1 * num2-1
2**3=>2*2*2 =>2*(2**2)     num1 * num2-1
2**2=>2*2 =>2*(2**1)       num1 * num2-1
2**1=>2         =>num2=1 return num1
2**0=>1         =>num2=0 return 1
*/

function powerOfNumber(num1, num2) {
  if (num2 < 0) return 1 / powerOfNumber(num1, -num2);
  if (num2 == 0) return 1;
  if (num2 == 1) return num1;
  return num1 * powerOfNumber(num1, num2 - 1);
}
let num1 = 2;
let num2 = 5;
console.log("2**5: ", powerOfNumber(num1, num2)); //32
console.log("10**-2: ", powerOfNumber(10, -2)); // 0.01
