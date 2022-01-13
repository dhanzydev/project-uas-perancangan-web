const toggleMenu = document.querySelector(".btn-menu");
const navMenu = document.querySelector("nav .nav-menu");
const formKuliah = document.querySelector(".form-order-kuliah");
const formSmpSma = document.querySelector(".form-order-smpsma");
const send = document.getElementById("send-order");

toggleMenu.addEventListener("click", function () {
  navMenu.classList.toggle("open");
});

function notif() {
  alert("Pesananmu sudah tersampaikan ke admin. Terima Kasih");
}

// function notif() {

// }

function formChange() {
  var x = document.getElementById("education").selectedIndex;
  var y = document.getElementsByTagName("option")[x].value;

  if (y == "Kuliah") {
    formKuliah.setAttribute("style", "display: block");
    formSmpSma.setAttribute("style", "display: none");
  } else {
    formKuliah.setAttribute("style", "display: none");
    formSmpSma.setAttribute("style", "display: block");
  }
}
