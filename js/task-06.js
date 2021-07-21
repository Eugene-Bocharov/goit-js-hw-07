let input = document.querySelector("#validation-input");
input.addEventListener("blur", checkLength);

const good_length = input.dataset.length;

function checkLength() {
  if (input.value.length > good_length) {
    input.classList.remove("none");
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else if (input.value.length <= good_length) {
    input.classList.remove("none");
    input.classList.remove("invalid");
    input.classList.add("invalid");
  }
}