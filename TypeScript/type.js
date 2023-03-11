"use strict";
//definign a type in ts;
exports.__esModule = true;
function createUser(user) {
    var obj = {
        name: 'manish',
        age: 23,
        email: 'm@m.com',
        city: user.city
    };
    return obj;
}
var t = createUser({ name: "manihs", age: 23, city: 'kashipur' });
console.log(t);
