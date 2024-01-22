#!/usr/bin/node
const request = require('request');
const id = process.argv[2];
const url = "https://swapi-api.hbtn.io/api/films/";

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
  }
  const jsonResponse = JSON.parse(body);
  let movies = 0;

  for (let i = 0; i < jsonResponse.results.length; i++) {
    const characters = jsonResponse.results[i].characters;

    for (let j = 0; j < characters.length; j++) {
      if (characters[j].includes("18")) {
        movies += 1;
        break; // No need to continue checking if found
      }
    }
  }
  console.log(movies);
});
