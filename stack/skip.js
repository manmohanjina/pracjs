//skippin 1 and counting 0

let no = [0,0,1,0,0,1,0]; //4

let count = 0;

let left = 0;
let right = no.length - 1;

while (left < right) {
  if (no[left] == 0 && no[left + 2] == 0) {
    count++;
    left++
    left++
    console.log(left,"*")
  } else if (no[left] == 0 && no[left + 1] == 0) {
    count++;
    left ++
  } else if (no[left] == 1) {
    left++;
    
  }
}
console.log(count);
