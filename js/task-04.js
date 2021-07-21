const refs = {
  buttons: document.querySelectorAll("button"),
  value: document.querySelector("#value"),
  ValueOfCounter: 0,
};

const increment = function () {
  refs.ValueOfCounter = refs.ValueOfCounter + 1;
  refs.value.innerHTML = refs.ValueOfCounter;
};

const decrement = function () {
  refs.ValueOfCounter = refs.ValueOfCounter - 1;
  refs.value.innerHTML = refs.ValueOfCounter;
};

refs.buttons.forEach(function (button) {
  button.addEventListener("click", (event) => {
    const atribute = button.getAttribute("data-action");
    if (atribute === "decrement") {
      decrement();
    } else if (atribute === "increment") {
      increment();
    }
  });
});
