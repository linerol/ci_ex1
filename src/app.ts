import http from "http";
import fs from "fs";
import { User } from "./interfaces/user.interface";
import { displayUserName } from "./lib/displayUserName";

const user: User = {
  firstName: "John",
  lastName: "Doe",
};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const html = `
      <html>
        <head>
          <title>My First Node.js App</title>
          <link rel="stylesheet" href="/public/css/styles.css"/>
        </head>
        <div class="app__message">
          <h1>Hello ${displayUserName(user)}</h1>
        </div>
      </html>
    `;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  } else if (req.url === "/public/css/styles.css") {
    fs.readFile("./public/css/styles.css", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("File Not Found");
      } else {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      }
    });
  }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
