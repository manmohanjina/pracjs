function prom(time) {
  let promise = new Promise((res, rej) => {
    if (typeof time != "number") rej("promise arg should be a no");
    else {
      setTimeout(() => {
        res("promise resolved");
      }, time);
    }
  });
  console.log("now");
  return promise;
}

// prom(3000)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//  prom(1000).then((res)=>{
//   console.log(res)
//  })

//Promise.resolve().then((res) => console.log(res));

//promise.all example

// let flag=true
// let p1=new Promise((res,rej)=>{
//    if(!flag){
//     rej('promise rejected')
//    }
//    else{
//     res('promise successs')
//    }
// })

// let p2=new Promise((res,rej)=>{
//   if(!flag){
//     rej('promise rejected')
//    }
//    else{
//     res('promise successs')
//    }
// })
// let p3=new Promise((res,rej)=>{
//   if(!flag){
//     rej('promise rejected')
//    }
//    else{
//     res('promise successs')
//    }
// })

// let allpromise=[]
// allpromise.push(p1,p2,p3)

// Promise.all(allpromise).then((res)=>{
//   console.log(res)
// }).catch((err)=>{
//   console.log('rej')
//   console.log(err)
// })


