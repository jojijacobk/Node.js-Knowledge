const fs = require("fs");
const path = require("path");
const {dirname} = require("path");
const filePath = "/home/opc/Node.js-Knowledge/src/file/ghost-protocol.txt";

fs.readdir(".", (err, files) => {
  for (let file of files) {
    file = path.resolve(file);
    const stats = fs.stat(file, (err, stats) => {
      if (err) throw new Error(err.message);
      console.log(stats);
    });
  }
});

// fs.readFile(filePath, "utf-8", (err, data) => {
//   if (err) throw new Error(err.message);
//   console.log(data);
// });
