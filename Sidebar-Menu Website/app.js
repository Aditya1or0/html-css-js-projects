const toggleBtn = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");

function toggleSidebar(button) {
  sidebar.classList.toggle("close");
  toggleBtn.classList.toggle("rotate");
  closeAllSubMenus();
}

function toggleSubMenu(button) {
  if (!button.nextElementSibling.classList.contains("show")) {
    closeAllSubMenus();
  }

  button.nextElementSibling.classList.toggle("show");
  button.classList.toggle("rotate");
  if (sidebar.classList.contains("close")) {
    sidebar.classList.toggle("close");
    toggleBtn.classList.toggle("rotate");
  }
}
function closeAllSubMenus() {
  Array.from(sidebar.getElementsByClassName("show")).forEach((uL) => {
    uL.classList.remove("show");
    uL.previousElementSibling.classList.remove("rotate");
  });
}
