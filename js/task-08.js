const refs = {
  input: document.querySelector(".input"),
  create: document.querySelector(".create"),
  clear: document.querySelector(".clear"),
  important_div: document.querySelector("#boxes"),
  min_size: 30,
};
// const i = 0;

refs.create.addEventListener("click", (event) => {
  createBoxes(0)
});

function createBoxes(amount){
    for (amount;  amount< refs.input.value; amount++) {
        let div = document.createElement("div");
        div.style.background =
          "rgb(" +
          getRandomInt(0, 255) +
          ", " +
          getRandomInt(0, 255) +
          ", " +
          getRandomInt(0, 255) +
          ")";
        div.style.backgroundColor = Math.random;
        div.style.width = refs.min_size + "px";
        div.style.height = refs.min_size + "px";
        div.style.BorderRadius = '8px';
        refs.important_div.appendChild(div);
        refs.min_size += 10;
     
}}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
refs.clear.addEventListener("click", (event) => {
    while(refs.important_div.firstChild) refs.important_div.removeChild(refs.important_div.firstChild);
    refs.min_size = 30;
});
