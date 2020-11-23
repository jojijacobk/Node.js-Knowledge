const http = require('http');
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const httpServerPort = 3000;

(async () => {
  let video;
  readFile('./assets/videos/sample-mp4-file.mp4')
    .then((data) => (video = data))
    .catch((e) => {
      console.log(e.message);
    });

  const serverHandler = (httpRequest, httpResponse) => {
    if (video) {
      httpResponse.writeHeader(200, { 'Content-Type': 'video/mp4' });
      httpResponse.end(video);
    } else {
      httpResponse.writeHeader(400);
      httpResponse.end();
    }
  };

  http.createServer(serverHandler).listen(httpServerPort, console.log(`Server listening on port ${httpServerPort}`));
})();
