const toggleMenu = document.querySelector(".btn-menu");
const navMenu = document.querySelector("nav .nav-menu");
const formKuliah = document.querySelector(".form-order-kuliah");
const formSmpSma = document.querySelector(".form-order-smpsma");

toggleMenu.addEventListener("click", function () {
  navMenu.classList.toggle("open");
});

function formChange() {
  var x = document.getElementById("education").selectedIndex;
  var y = document.getElementsByTagName("option")[x].value;

  if (y == "") {
    formSmpSma.setAttribute("style", "display: none");
    formKuliah.setAttribute("style", "display: none");
  } else if (y == "Kuliah") {
    formKuliah.setAttribute("style", "display: block");
    formSmpSma.setAttribute("style", "display: none");
  } else {
    formKuliah.setAttribute("style", "display: none");
    formSmpSma.setAttribute("style", "display: block");
  }
}
