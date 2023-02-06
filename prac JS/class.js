class Create {
     
  constructor(...args) {
    let [name,age]=args
    let arr=[]
    arr.push(name,age)
    return arr
  }
}
let t = new Create('maniush',24);
console.log(t);
