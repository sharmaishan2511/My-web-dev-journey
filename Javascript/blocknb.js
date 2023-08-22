// synchronous or blocking 
// line by line execution

// asynchronous or non blocking
// line by line not guranteed
// callbacks will fire

const fs = require("fs");
// let text = fs.readFileSync("yo.txt","utf-8");
fs.readFile("yo.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("This is a message");
