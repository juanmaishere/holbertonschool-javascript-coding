#!/usr/bin/node
const request = require('request');
const id = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${id}`;

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
  }
  const jsonResponse = JSON.parse(body);

  if (jsonResponse.title) {
    console.log(jsonResponse.title);
  }
});
