// singleton
//Object.create
//object literals
 
const mySym = Symbol("key1");

const biodata = {
    name: "suresh",
    age: 18,
    email: "suresh@bugaliya.com",
    address: "jaipur",
    isLoggedIn: false,
    lastLoginDays: ["monday", "sunday"],
    [mySym]: "mykey1"
}

// console.log(biodata.email);
// console.log(biodata["age"]);
// console.log(biodata[mySym]);
// console.log(typeof biodata[mySym]);

// biodata.email = "change@gmail.com";
// console.log(biodata);
// Object.freeze(biodata);
// biodata.email = "againchange@gmail.com";
// console.log(biodata);

biodata.greeting = function(){
    console.log("hello js user");
}
biodata.greetingTwo = function(){
    console.log(`hello js user ${this.name}`);
}
console.log(biodata.greeting());
console.log(biodata.greetingTwo());
