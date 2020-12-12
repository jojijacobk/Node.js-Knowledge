const ProgressBar = require("progress");
const https = require("https");
const fs = require("fs");
const chalk = require("chalk");

const download = https.request({
  host: "www.learningcontainer.com",
  port: 443,
  path: "/wp-content/uploads/2020/05/sample-mp4-file.mp4",
});

download.on("response", response => {
  const contentLength = parseInt(response.headers["content-length"]);
  const videoFile = fs.createWriteStream("video.mp4");

  let message = chalk.yellowBright("Downloading [ :percent ]");
  const downloadProgressBar = new ProgressBar(message, {
    incomplete: " ",
    complete: ">",
    total: contentLength,
  });

  response.on("data", chunk => {
    downloadProgressBar.tick(chunk.length);
    videoFile.write(chunk);
  });
});

download.end();
