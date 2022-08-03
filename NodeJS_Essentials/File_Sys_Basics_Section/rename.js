const fs  = require("fs");

fs.renameSync("./storage-files/colorsOnColors.md", "./storage-files/colorData.md");

fs.rename("./assets/notes.md", "./storage-files/notes.md", err => {
    if(err) throw err;
});

setTimeout(() => {

    fs.unlinkSync("./assets/alex.jpg");
}, 4000);