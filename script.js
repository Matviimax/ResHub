let modal = document.getElementById("modalWindow");
let coment = document.getElementById("modalComent");
let menuList = document.getElementById("menuItems");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
  coment.style.display = "none";
}

function btnModal() {
  coment.style.display = "block";
}

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

setTimeout(openModal, 30000);

function toggleMenu() {
  if (menuList.style.display === "block") {
    menuList.style.display = "none";
  } else {
    menuList.style.display = "block";
    setTimeout(closeMenu, 5000);
  }
}

function closeMenu() {
  menuList.style.display = "none";
}
