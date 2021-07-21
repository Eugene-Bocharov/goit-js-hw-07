const refs = {
  ul: document.querySelector("#categories"),
  li_item: document.querySelectorAll(".item"),
};

console.log("В списке " + refs.li_item.length + " категории");

// const items = document.querySelectorAll(".item");

refs.li_item.forEach(function (item) {
  const list = item.children[1];
  const list_child = list.children;
  console.log(`Категория: ${item.firstElementChild.textContent}`);
  console.log(`Количество элемнтов: ${list_child.length}`);
});
