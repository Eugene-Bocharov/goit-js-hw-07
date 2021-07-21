const refs = {
  span: document.querySelector("#name-output"),
  input: document.querySelector("#name-input"),
};

refs.input.addEventListener("input", (event) => {
  refs.span.textContent = refs.input.value;
});
