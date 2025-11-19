function closeReloadPopup() {
  document.getElementById("reloadPopup").classList.remove("show");
}

function showReloadPopup() {
  const popup = document.getElementById("reloadPopup");
  popup.classList.add("show");
}

window.addEventListener("load", () => {
  showReloadPopup();
});
