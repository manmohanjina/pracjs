"use strict";
const { log } = console;
class User {
    constructor(email, name, city, id) {
        this._courseCount = 1;
        this.email = email;
        this.name = name,
            this.city = city;
        this._id = id;
    }
    deleteToken() {
        console.log('token Deleted');
    }
    get getappleEmail() {
        return `apple ${this.email}`;
    }
    get coursecount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('course count should be more than 1');
        }
        else {
            this._courseCount = courseNum;
        }
    }
}
const newuser = new User("m@m.com", "manish", "kashipur", 3);
console.log(newuser);
