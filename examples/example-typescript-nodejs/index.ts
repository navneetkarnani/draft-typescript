import express, { RequestHandler } from "express";
import { json } from "body-parser";

const port = process.env.PORT || 3000;

const requestHandler: RequestHandler = (request, response) => {
  console.log(request.url);
  response.end("Hello World, I'm Node.js!");
};

const router = express.Router();
router.get("/", requestHandler);

const server = express();
server.use(json());
server.use(router);

server.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
