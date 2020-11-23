const http = require("http");
const Router = require("router");
const finalHandler = require("finalhandler");

const router = new Router();
http
  .createServer()
  .on("request", (request, response) => {
    router(request, response, finalHandler(request, response));
  })
  .listen(3000, () => {
    console.log(`Server started listening at 3000`);
  });

router.get("/employee/:id", (request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain, charset=utf-8"});
  response.end(`Employee id: ${request.params.id} is somebody`);
});

router.post("/employee/:id", (request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain, charset=utf-8"});
  response.end(`Employee id: ${request.params.id} is updated`);
});

