const config = {
  port: process.env.PORT || 1024,
  root: "/home/opc/www",
};

const httpRequestHandler = (request, response) => {
  response.end(request.path);
};

require("http")
  .createServer(httpRequestHandler)
  .listen(config.port, () =>
    console.log(`Server started listening at ${config.port}`)
  );
