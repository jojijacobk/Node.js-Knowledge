const fs = require("fs");
const filePath = "/home/opc/Node.js-Knowledge/src/file/sample.txt";

fs.writeFile(filePath, "hello world", {flag: "a"}, err => {
  if (err) throw new Error(err.message);
});
