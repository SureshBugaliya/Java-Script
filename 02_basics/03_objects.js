// singleton
//Object.create
//object literals
 
const mysym = Symbol("key1");

const biodata = {
    name: "suresh",
    age: 18,
    email: "suresh@bugaliya.com",
    address: "jaipur",
    isLoggedIn: false,
    lastLoginDays: ["monday", "sunday"],
    [mysym]: "mykey1"
}

// console.log(biodata.email);
// console.log(biodata["age"]);
console.log(biodata[mysym]);
console.log(typeof biodata[mysym]);
