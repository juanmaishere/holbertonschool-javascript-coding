#!/usr/bin/node
const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const filepath = process.argv[3];

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
  }
  fs.writeFile(filepath, body, 'utf-8', (err) => {
    if (err) {
      console.error('Error writing to the file:', err);
    }
  });
});
