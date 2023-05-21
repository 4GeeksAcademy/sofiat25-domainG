/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let articles = ["the", "an", "some", "another", "any"];
  let adjectives = ["awesome", "cool", "fantastic", "thrilling", "funny"];
  let nouns = ["website", "blog", "webapp", "spot", "hub"];
  let tids = [
    ".com",
    ".de",
    ".org",
    ".space",
    ".rocks",
    ".barcelona",
    ".cat",
    ".dog"
  ];

  let domaInNames = [];

  for (let article of articles) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let tid of tids) {
          domaInNames.push(`${article}${adjective}${noun}${tid}`);
        }
      }
    }
  }

  document.querySelector("#generate").onclick = () => {
    document.querySelector("#domain").innerHTML = `<h1>${
      domaInNames[Math.floor(Math.random() * domaInNames.length)]
    } </h1>`;
  };
};
