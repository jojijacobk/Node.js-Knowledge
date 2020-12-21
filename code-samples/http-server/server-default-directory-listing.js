const http = require("http");
const fs = require("fs");
const path = require("path");
const promisify = require("promisify-es6");
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

const projectRootDir = path.dirname(__dirname);

function isDirectory(file) {
  return !fs.statSync(file).isFile();
}

async function directoryListing(filePath, requestUrl) {
  const files = await readdir(filePath);
  const listing = files
    .map(item => {
      const file = path.join(filePath, item);
      const relativePath = path.join(requestUrl, item);
      const icon = fs.statSync(file).isFile() ? "&#x2014;" : "&#x2E43;";
      return `<div>${icon} <a href="${relativePath}">${item}</a></div>`;
    })
    .join(" ");
  return `<div>${listing}</div>`;
}

const requestHandler = async (request, response) => {
  try {
    const requestedFile = projectRootDir + request.url;
    if (isDirectory(requestedFile)) {
      const list = await directoryListing(requestedFile, request.url);
      response.end(list);
    } else {
      // read file using stream
      fs.createReadStream(requestedFile).pipe(response);

      // read file using promise
      /**
       * readFile(requestedFile, "utf-8").then(data => {
       *   response.end(data);
       * });
       */
    }
  } catch (e) {
    console.log(e.message);
  }
};

http.createServer(requestHandler).listen(3000, () => {
  console.log("listening at 3000");
});
