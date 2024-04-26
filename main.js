const toggleMark = document.querySelector(".toggle-btn");
const allBoxes = document.querySelectorAll(".box");
const unreadBoxes = document.querySelectorAll(".box.un-read");
let countBoxes = document.querySelector("h1 span");
let amount = unreadBoxes.length;
countBoxes.innerHTML = amount;

unreadBoxes.forEach((unreadBox) => {
  unreadBox.addEventListener("click", (e) => {
    unreadBox.classList.remove("un-read");
    handleMinus();
  });
});

toggleMark.addEventListener("click", () => {
  allBoxes.forEach((box) => {
    box.classList.remove("un-read");
    countBoxes.innerHTML = 0;
  });
});

function handleMinus() {
  if (amount >= 1) {
    amount--;
  }
  countBoxes.innerHTML = amount;
}
