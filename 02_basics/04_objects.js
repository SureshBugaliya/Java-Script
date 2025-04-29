// const tinderUser = new Object();

const tinderUser = {};


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const ragulerUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            fristName: "suresh",
            LastName: "Bugaliya"
        }
    }
}

//console.log(ragulerUser.fullName.userFullName);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user =[
    {
        id: 1,
        email: "h@h.h"
    },
    {
        id: 1,
        email: "h@h.h"
    },
    {
        id: 1,
        email: "h@h.h"
    },
    {
        id: 1,
        email: "h@h.h"
    },
    {
        id: 1,
        email: "h@h.h"
    },
]
console.log(user[1].email);
