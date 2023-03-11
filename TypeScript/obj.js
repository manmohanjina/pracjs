"use strict";
exports.__esModule = true;
var obj = {
    name: 'manish',
    age: 28,
    city: "kashipur"
};
//using a objcts in functions or returns a obj by a  function;
var user = {
    name: 'manish',
    age: 23,
    city: "kashipur"
};
function createUser(_a) {
    var string = _a.name, number = _a.age;
    var name = user.name, age = user.age, city = user.city;
    console.log(name, age, city);
}
createUser(user);
//how to return a obj from a funciton 
function Course() {
    return {
        name: 'typeScript',
        isPaid: false
    };
}
