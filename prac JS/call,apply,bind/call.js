// const obj = {
//   first_name: "manmohan",
//   last_name: "jina",
//   fullname:function(){
//     console.log(this.first_name+""+this.last_name)
//   }
// };

// const obj2={
//     first_name: "sachin",
//   last_name: "Tendulkar",
// }

// obj.fullname.call(obj2)
//.call method provides us the accesss to borrow methods written in another objets and it takes a argument by which it can define where the this would be pointing towards

//however we can also write the function sepretly and the use .call methods onto them

const obj = {
  name: "mansih",
  age: 27,
};

const obj2 = {
    name: "manmohan",
    age: 27,
  };

function printname(a, b) {
  console.log(this.name, this.age,a);
}

//printname.call(obj2,"this is this the second args to the .call method")

//the only diffrence bw call and apply is that apply takes arr of arrguments 
//eg:-

//printname.apply(obj,['hello manish','playing with apply'])

//now comes the bind method 
//it is bascally going to bind the function to the object and returns us a new function that we are going to use at later point of time

// let x= printname.bind(obj,"bind method")
// x()