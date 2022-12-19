let countEl = document.getElementById("count-el");
let saveBtn = document.getElementById("save-btn");
let saveCount = document.getElementById("save-count");

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  console.log(count);
  saveCount.textContent += count + " - " + " ";
  count = 0;
  countEl.textContent = count;
}
