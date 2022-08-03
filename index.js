#!/usr/bin/env node

// include http module/file system/port:
const http = require('http');
const fs = require('fs');
const url = require('url');
const port = process.env.PORT || 8080;

// server will call on this port and hostname:
const server = http.createServer((req, res) => {

  // take user to index.html
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  }// if
  else if (req.url === "/about") {
    fs.readFile("about.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  }// else if 
  else if (req.url === "/contact-me") {
    fs.readFile("contact-me.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  }// else if 
  else {
    fs.readFile("404.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  }
});

server.listen(port, () => console.log(`Server is running at http://localhost:${port}`));