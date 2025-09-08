import app from "./main.js";
import http from "http";

const port = 8008;

console.log("lisening on port", port);

app.set("port", port);
const server = http.createServer(app);
server.listen(port);
