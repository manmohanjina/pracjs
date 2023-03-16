"use strict";
//union in ts
//instead of datatype we can use union;
exports.__esModule = true;
//it can be sometime a string also some times;
var score = 33;
score = "manish";
var Manish = {
    id: 123,
    adminName: "123"
};
function getData(id) {
    if (typeof id === "string") {
        console.log(id.toLocaleLowerCase());
    }
    else {
        return id + 2;
    }
}
// let t=getData(2)
// console.log(t);
var arr = [2, 3, 4, "hel"];
var number = [2, 4, 56];
var str = ['234', 'helop'];
// const both:Array<string>|Array<number>=[123,'qwe']
//this cannot happen
var either = ["123", 234];
console.log(either);
