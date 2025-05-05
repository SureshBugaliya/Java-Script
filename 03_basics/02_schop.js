//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "suresh"

    function two(){
        const website = "sureshbugliya.com"
        console.log(username);
    }
    // console.log(website);
    two();
}


// one()

if(true){
    const username = "suresh"
    if(username === "suresh"){
        const website = " yotube"
        console.log(username + website);
    }
    // console.log(website); // not allow
}
// console.log(username); // not allow


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}
