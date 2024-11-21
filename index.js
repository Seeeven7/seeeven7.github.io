function addTemplates() {
  document.getElementById("menu").innerHTML = menu;
  document.querySelector("footer").innerHTML = footer;
}

function addEventListeners() {}

function sayHelloInConsole() {
  console.log(
    "%cHey there, I am not hiring but I am open to job inquiries! Just contact me.",
    "color: grey; font-weight: bold; background-color: black;padding: 5px; font-size: 1.5em;"
  );
}

(function main() {
  addTemplates();
  addEventListeners();
  sayHelloInConsole();
})();

//helper
function toggleClasses(element, add, remove) {
  element.classList.add(add);
  element.classList.remove(remove);
}
