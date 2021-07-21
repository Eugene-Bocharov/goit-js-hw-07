const refs = {
  ul: document.querySelector("#ingredients"),
};

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

for (const ads of ingredients) {
  const li = document.createElement("li");
  li.textContent = ads;
  refs.ul.append(li);
}
