//finding a longest substring with no repeating character;


let str = "abcabcbb";

let set = new Set();
let left = 0;
let right = 0;
let max = 0;
//add del has

const val = set.values();


let bag = "";
while (left < str.length) {
  if (!set.has(str[left])) {
    set.add(str[left]);
  

    left++;
    max = Math.max(max, set.size);
  } else {
    set.delete(str[right]);
    right++;
  }
}
console.log(bag);
