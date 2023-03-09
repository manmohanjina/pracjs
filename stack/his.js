const arr = [4, 2, 1, 5, 6, 3, 2, 4, 2];
let n = arr.length;
//first calculate prevSmaller
function prevSmaller(arr, n) {
  let ans = [];
  let stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length != 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      ans.push(-1);
    } else {
      ans.push(stack[stack.length - 1]);
    }
    stack.push(i);
  }
  //console.log(ans)
  return ans;
}

//const arr = [4, 2, 1, 5, 6,3,2,4,2];
//calculating the next Smaller element in arr
function NextSmaller(arr, n) {
  let stack = [];
  let ans = [];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length != 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      ans.push(n);
    } else {
      ans.push(stack[stack.length - 1]);
    }
    stack.push(i);
  }
  //console.log(ans.reverse(),"nextsmaller")
  return ans.reverse();
}

function Maxhisto(arr, n) {
  //nextSmaller indexs
  //[1,  2, -1,  5, 5, 6, -1,  8, -1 ]
  //prevSmaller
  //[-1, -1, -1, 2, 3,2,  2,  6, 2]

  let max = 0;
  let nextS = NextSmaller(arr, n);
  let prevS = prevSmaller(arr, n);
  // console.log(nextS, "nextSmaller");
  // console.log(prevS, "smaller");
  for (let i = 0; i < n; i++) {
    let area = (nextS[i] - prevS[i] - 1) * arr[i];

    max = Math.max(max, area);
    
  }
  return max;
}
console.log(Maxhisto(arr, n));
