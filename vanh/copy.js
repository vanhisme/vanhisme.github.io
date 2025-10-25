// PhamVietAnh - vanhisme.github.io

document.querySelectorAll('.copy-text').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const textToCopy = item.getAttribute('data-copy');
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast("Đã sao chép!");
    });
  });
});

function showToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.position = 'fixed';
  toast.style.bottom = '30px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.background = '#2e8ef7';
  toast.style.color = '#fff';
  toast.style.padding = '10px 20px';
  toast.style.borderRadius = '8px';
  toast.style.fontSize = '14px';
  toast.style.opacity = '0';
  toast.style.transition = 'opacity 0.3s ease';
  toast.style.zIndex = '9999';
  document.body.appendChild(toast);

  setTimeout(() => toast.style.opacity = '1', 100);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 1500);
}
