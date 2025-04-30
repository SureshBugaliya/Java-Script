function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

function calgulatePrice(...num1) {
    return num1
}

console.log(calgulatePrice(200, 400, 500, 40000, 508));


const user = {
    name: "suresh",
    price: 8947583764234
}

function objectHeandle(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
}
// objectHeandle(user);
// objectHeandle({
//     name: "sureshes",
//     price: 5897689795687
// });


const mynewarray = [757, 8586, 8888, 756, 7774, 7773, 857,];