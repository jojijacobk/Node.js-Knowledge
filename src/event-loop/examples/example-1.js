const https = require("https");

function run() {
  setTimeout(() => console.log("1. I'm coming from setTImout"), 0);

  const fastPromise = new Promise((resolve, reject) => {
    resolve();
  });
  fastPromise.then(() => console.log("2. Fast Promise is resolved"));

  const slowPromise = new Promise((resolve, reject) => {
    const request = https.request(
      {
        hostname: "sv443.net",
        port: 443,
        path: "/jokeapi/v2/joke/Programming?format=txt",
        method: "GET",
      },
      response => {
        let joke = "";
        response.on("data", chunk => {
          joke += chunk;
        });
        response.on("end", () => {
          resolve(joke);
        });
      }
    );
    request.end();
  });

  slowPromise.then(joke => console.log(`3. Slow Promise is resolved`));

  process.nextTick(() => console.log("4. process.nextTick"));
}

run();
