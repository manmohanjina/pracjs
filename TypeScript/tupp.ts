
const user:Array<string>=["manish","manmohan"]

const user2:Array<string|number>=["manish","123",123]
//in the above senario we canot define the order of datatype in arr i.e which should come first like first element should be string, or a boolean or a number ;

//this case can be sorter by using tupplis ;


let user3:[number,string, boolean]=[3,"hel",true]
//we cannnot reverse the or mix the type of datatypes present in the arr;
//order of the arr should be maintain in the arr so this case be handeled by the tuppil;

//2nd testcase of using a tuppil;


let rbg:[number,number,number]=[1,2,3]
 //the length of the arr can be maintained by using a tuppil;


 type user2=[number,string]


 const newUser:user2=[123,"helo"]

 //using type with tuppil;
 








export {}