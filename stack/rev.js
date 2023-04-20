
//make rev of no ; no can be in negative also;







 function rev(num){
    const isNegative=num<0;
    console.log(isNegative,"is");

     let str= Math.abs(num).toString().split("")
     let rverse=str.reverse().join("")


    
    let number=Number(rverse)
    console.log(number)

     if(isNegative && num>Math.pow(2,31)){
        return 0
     }
   
        return isNegative?-rverse:rverse
 

 }
 let t=rev(-123)
 console.log(t)




