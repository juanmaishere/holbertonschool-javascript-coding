#!/usr/bin/node
let fs = require('fs');

const filepath = process.argv[2];
const content = process.argv[3];

fs.writeFile(filepath, content, 'utf-8', (err) => {
  if (err) {
    console.error('Error writing to the file:', err);
  } else {
  }
});
