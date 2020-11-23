const http = require('http');
const fs = require('fs');
const httpServerPort = 3000;

let promoVideo;
fs.readFile('./assets/videos/sample-mp4-file.mp4', (err, data) => {
  if (err) {
    console.log(err.message);
    return;
  }
  promoVideo = data;
});

http
  .createServer((httpRequest, httpResponse) => {
    if (promoVideo) {
      httpResponse.writeHeader(200, { 'Content-Type': 'video/mp4' });
      httpResponse.end(promoVideo);
    } else {
      httpResponse.writeHeader(400);
      httpResponse.end();
    }
  })
  .listen(httpServerPort, console.log(`listening on port ${httpServerPort}`));
