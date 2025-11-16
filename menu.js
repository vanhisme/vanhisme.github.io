const menu = document.getElementById("context-menu");

document.addEventListener("contextmenu", (e) => {
    if (window.innerWidth < 768) return; // Mobile bỏ qua
    e.preventDefault();
    openMenu(e.pageX, e.pageY);
});

let pressTimer;
document.addEventListener("touchstart", (e) => {
    if (window.innerWidth >= 768) return;

    pressTimer = setTimeout(() => {
        const touch = e.touches[0];
        openMenu(touch.pageX, touch.pageY);
    }, 400);
});

document.addEventListener("touchend", () => {
    clearTimeout(pressTimer);
});

function openMenu(x, y) {
    const menuWidth = 230;
    const menuHeight = 350;

    if (x + menuWidth > window.innerWidth)
        x = window.innerWidth - menuWidth - 10;

    if (y + menuHeight > window.innerHeight)
        y = window.innerHeight - menuHeight - 10;

    menu.style.left = `${x}px`;
    menu.style.top = `${y}px`;
    menu.classList.add("show");
}

document.addEventListener("click", () => {
    menu.classList.remove("show");
});

function copySelectedText() {
    const selected = window.getSelection().toString();

    if (!selected.trim()) {
        alert("Không có chữ nào để copy!");
        return;
    }

    navigator.clipboard.writeText(selected)
        .then(() => alert("Đã copy: " + selected))
        .catch(() => alert("Copy thất bại :( "));
}
