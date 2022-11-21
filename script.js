let title;
let button;

function main() {
  title = document.getElementById('title');
  button = document.getElementById('button');
}

function click() {
  title.contentText = "Test";
}

document.addEventListener('DOMContentLoaded', main)