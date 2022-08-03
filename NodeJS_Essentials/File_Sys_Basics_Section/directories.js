const fs = require("fs");

// fs.renameSync("./storage-files", "./storage");

fs.readdirSync("./storage").forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`)
})


// cant remove directory unless empty thus deleteing files first

fs.rmdir("./storage", err => {
    if(err) throw err;

    console.log('stroage dir removed');
})