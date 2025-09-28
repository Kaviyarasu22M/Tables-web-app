let input = document.getElementById("user-input");
let show = document.getElementById("show");
let btn = document.getElementById("btn");
let remove = document.getElementById("rem");
let shownBox = document.getElementById("shownBox");

btn.addEventListener("click", () => {
  let table = input.value;
  if (table === "") return;

  show.innerHTML = "";
  for (let i = 1; i <= 12; i++) {
    show.innerHTML += `${table} x ${i} = ${i * table}` + "<br>";
  }

  input.value = "";
  shownBox.scrollTop = shownBox.scrollHeight;
});

remove.addEventListener("click", () => {
  show.textContent = "";
});
