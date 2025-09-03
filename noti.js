function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    let toast = document.getElementById("toast");
    toast.classList.add("show");

    // Hiện 2s rồi ẩn
    setTimeout(() => {
      toast.classList.remove("show");
      toast.style.display = "none"; // reset
    }, 2000);

    // Reset để lần sau click hiện lại
    toast.style.display = "flex";
  }).catch(err => {
    alert("Không thể copy trên thiết bị này!");
  });
}