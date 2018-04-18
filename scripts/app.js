"use strict";

function hi(name = "Alex") {
  return `Hi ${name}`;
}

console.log(hi());

async function hii(url) {
  const response = await fetch(url);
  return await response.json();
}

function test(url) {
  fetch(url)
    .then(function() {
      console.log(url.json());
    })
    .catch(function(err) {
      console.log(err);
    });
}