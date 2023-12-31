function addTemplates() {
  document.getElementById('menu').innerHTML = menu;
  document.querySelector('footer').innerHTML = footer;
}

function addEventListeners() {}

(function main() {
  addTemplates();
  addEventListeners();
})();

//helper
function toggleClasses(element, add, remove) {
  element.classList.add(add);
  element.classList.remove(remove);
}
