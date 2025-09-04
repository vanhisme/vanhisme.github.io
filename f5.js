const KEY = "f5Count";
    let count = parseInt(localStorage.getItem(KEY) || "0", 10);
    const navEntry = performance.getEntriesByType("navigation")[0];
    const isReload =
      (navEntry && navEntry.type === "reload") ||
      (performance.navigation && performance.navigation.type === 1);
    if (isReload) {
      count += 1;
      localStorage.setItem(KEY, count);
    }
    document.getElementById("hienthi").innerText = "Số Lần F5: " + count;
