import http from "http";
const port = process.env.PORT || 3000;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end("Hello World, I'm Node.js!");
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
