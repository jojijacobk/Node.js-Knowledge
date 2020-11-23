const http = require("http");
const fs = require("fs");

const config = {
  port: 3000,
  errorLog: {
    isEnabled: true,
    file: "./error.log",
  },
  accessLog: {
    isEnabled: true,
    file: "./access.log",
  },
};

const server = http
  .createServer()
  .on("request", (request, response) => {
    const accessLog = `${request.method} ${request.url}`;
    writeAccessLog(accessLog);

    let data = [];
    request
      .on("error", e => writeErrorLog(e))
      .on("data", chunk => {
        data.push(chunk);
      })
      .on("end", () => {
        const requestPayload = data.join();

        response
          .on("error", e => writeErrorLog(e))
          .writeHead(200, {
            "Content-Type": "text/plain",
          })
          .end(requestPayload);
      });
  })
  .listen(config.port, () => {
    console.log(`Server started listening at ${config.port}`);
  });

const writeAccessLog = accessLog => {
  accessLog = "\n" + accessLog;
  config.accessLog.isEnabled &&
    fs.writeFile(config.accessLog.file, accessLog, {flag: "a"}, writeError => {
      if (writeError) console.log(`Failed to write access log: ${writeError}`);
    });
};

const writeErrorLog = error => {
  error = "\n" + error;
  config.errorLog.isEnabled &&
    fs.writeFile(config.errorLogFile, error.stack, {flag: "a"}, writeError => {
      if (writeError) console.log(`Failed to write error log: ${writeError}`);
    });
};

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("server gracefully terminated");
  });
});
