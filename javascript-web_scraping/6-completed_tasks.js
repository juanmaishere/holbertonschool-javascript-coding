#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
  }
  const jsonResponse = JSON.parse(body);
  const tasksdict = {};

  for (let i = 0; i < jsonResponse.results.length; i++) {
    const task = jsonResponse.results[i].completed;
    const userid = jsonResponse.results[i].userId;
    if (task === true) {
      tasksdict[userid] = (tasksdict[userid] || 0) + 1;
    }
  }
  console.log(tasksdict);
});
