const { port } = require('./config');
console.log(`Selected port is ${port}`);

const { createServer } = require("http");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const path = require("path");
const db = require("./database/connection")

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(port || 5000)

const app = express();
const dev = app.get("env") !== "production";

// if (!dev) {
  app.disable("x-powered-by");
  app.use(compression());
  app.use(morgan("common"));

 app.use(express.static(path.resolve(__dirname, "build")));

// if (dev) {
//   app.use(morgan("dev"));
//   app.use(express.static(path.resolve(__dirname, "build")));
// }
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get("/index", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.get('/notes', db.getNotes)
app.get('/notes/:id', db.getNoteById)
app.post('/notes/new', db.addNote)

app.get("/", function(req, res) {
    console.log("hello world")
})

const server = createServer(app);
server.listen(PORT, err => {
  if (err) throw err;
  console.log("Server Started!");
});
