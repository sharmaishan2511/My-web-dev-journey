const fs = require("fs");
let text = fs.readFileSync("yo.txt","utf-8");

console.log(text);
text = text.replace("mom","dad");

fs.writeFileSync("yooutput.txt",text);