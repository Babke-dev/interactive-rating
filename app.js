const rateButtons = document.querySelectorAll(".rating");
const form = document.querySelector("form");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const h4 = document.querySelector("h4");
const main = document.querySelector("main");
const contThanks = document.querySelector("#cont-thanks");
contThanks.className = "hidden";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  h4.innerText = `You selected ${userRating} out of 5`;
  main.style.display = "none";
  contThanks.style.display = "";
});

let userRating = "";
for (let rbutton of rateButtons) {
  rbutton.addEventListener("click", () => {
    rbutton.style.backgroundColor = "rgb(252, 118, 20)";
    userRating += rbutton.value;
    console.log(userRating);
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
    button5.disabled = true;
  });
}
