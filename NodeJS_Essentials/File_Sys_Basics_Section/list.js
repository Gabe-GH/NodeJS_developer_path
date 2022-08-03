const fs = require("fs");

// sync reading of files

console.log("started synchrounous reading files")

const files = fs.readdirSync("./assets");


console.log(files)
console.log("");


//////////////////////////////////////////////////


// async reading of files

fs. readdir("./assets", (err,files) => {
    if(err) throw err;

    console.log("complete");
    console.log(files);

});


console.log('started reading files...');
