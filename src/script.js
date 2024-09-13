const dropdownMenu = document.getElementById("dropdown");
const menubar = document.getElementById("menubar");
const mainContent = document.getElementById("main-content");
const screenSize = window.innerWidth;

dropdownMenu.onclick = () => {
  document.getElementById("submenu").classList.toggle("hidden");
  document.getElementById("arrow-btn").classList.toggle("rotate-0");
};

function openSidebar() {
  menubar.classList.toggle("left-0");
}
