const startDate = new Date("2025-09-03T00:00:00");

    function capNhat() {
      const now = new Date();
      let diff = now - startDate;

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      diff -= years * 365 * 24 * 60 * 60 * 1000;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * 24 * 60 * 60 * 1000;

      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * 60 * 60 * 1000;

      const minutes = Math.floor(diff / (1000 * 60));
      diff -= minutes * 60 * 1000;

      const seconds = Math.floor(diff / 1000);

      document.getElementById("thoigian").innerText =
        `${years} Năm ${days} Ngày ${hours} Giờ ${minutes} phút ${seconds} Giây`;
    }

    capNhat();
    setInterval(capNhat, 1000);
