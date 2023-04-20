

//if the diffrence between grade and next multiple of 5 is less than 3 =>round the grade to next multiple of 5;
//if the grade is less than 38 no rounding occurs 


let grade=40;

//we have to find the next multiple of 5 after 57; 

if(grade<38){
  grade=grade
}
else {
  let next_multiple=Math.ceil(grade/5)*5
  
  if(next_multiple-grade<3){
    grade=next_multiple
  }
  
   
  
}
console.log(grade);

// function round5(x)
// {
//     return Math.ceil(x/5)*5;
// }

// console.log( round5(57))