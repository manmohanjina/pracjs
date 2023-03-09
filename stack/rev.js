//reversing a no

let num = 901000;
num+=''

let rev = 0;
let rem = 0;

while (num !== 0) {
  rem = num % 10;
  num = num / 10;
  rev = rev * 10+rem
  console.log(num);
}
console.log(num)
