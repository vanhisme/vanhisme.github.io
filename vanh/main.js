// PhamVietAnh - vanhisme.github.io

document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

const buttons = document.querySelectorAll(".more-VietAnhPham");
const popups = document.querySelectorAll(".popup");
const closeVietAnhPhams = document.querySelectorAll(".close-VietAnhPham");
buttons.forEach(VietAnhPham => {
  VietAnhPham.addEventListener("click", () => {
    const target = VietAnhPham.getAttribute("data-popup");
    const popup = document.getElementById(`popup-${target}`);
     if (popup) popup.style.display = "flex";
  });
});

closeVietAnhPhams.forEach(VietAnhPham => {
  VietAnhPham.addEventListener("click", () => {
  VietAnhPham.closest(".popup").style.display = "none";
  });
});


  window.addEventListener("click", e => {
    if (e.target.classList.contains("popup")) {
      e.target.style.display = "none";
    }
  });
});

lucide.createIcons();


  const moreVietAnhPhams = document.querySelectorAll(".more-VietAnhPham");
  const popups = document.querySelectorAll(".popup");
  const closeVietAnhPhams = document.querySelectorAll(".close-VietAnhPham");

  moreVietAnhPhams.forEach(VietAnhPham => {
    VietAnhPham.addEventListener("click", () => {
      const popupId = VietAnhPham.getAttribute("data-popup");
      document.getElementById(`popup-${popupId}`).style.display = "flex";
    });
  });


  closeVietAnhPhams.forEach(VietAnhPham => {
    VietAnhPham.addEventListener("click", () => {
      VietAnhPham.closest(".popup").style.display = "none";
    });
  });

  window.onclick = function(event) {
    popups.forEach(popup => {
      if (event.target === popup) {
        popup.style.display = "none";
      }
    });
  };