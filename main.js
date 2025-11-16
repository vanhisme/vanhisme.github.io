function showPage(id, btn) {
      const pages = document.querySelectorAll('.page');
      const buttons = document.querySelectorAll('.menu button');
      pages.forEach(p => {
        if (p.classList.contains('active')) {
          p.classList.add('exit');
          setTimeout(() => p.classList.remove('exit', 'active'), 500);
        }
      });
      document.getElementById(id).classList.add('active');
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
}

function toggleTheme() {
      document.body.classList.toggle('light');
      const btn = document.querySelector('.theme-toggle');
      btn.textContent = document.body.classList.contains('light') ? '🌞 Chế độ sáng' : '🌙 Chế độ tối';
}