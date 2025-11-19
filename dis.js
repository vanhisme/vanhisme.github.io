   const DISCORD_ID = "1268387811892138096"; 

    function updateDiscordStatus() {
      fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`)
        .then(r => r.json())
        .then(data => {
          const user = data.data;
          if (!user) {
            document.getElementById("discord-text").textContent = "Offline";
            document.getElementById("discord-dot").style.background = "#747f8d";
            return;
          }

          const custom = user.activities?.find(a => a.type === 4);
          const statusText = custom?.state || "Không có status";
          const emoji = custom?.emoji?.name || "";

          document.getElementById("discord-emoji").textContent = emoji;
          document.getElementById("discord-text").textContent = statusText;

          const colors = {
            online: "#43b581",    // Xanh lá
            idle: "#faa61a",      // Vàng
            dnd: "#f04747",       // Đỏ
            offline: "#747f8d"    // Xám
          };
          document.getElementById("discord-dot").style.background = colors[user.discord_status] || "#747f8d";
        })
        .catch(err => {
          console.log("Lỗi Discord API:", err);
          document.getElementById("discord-text").textContent = "Lỗi kết nối";
          document.getElementById("discord-dot").style.background = "#f04747";
        });
    }

    updateDiscordStatus();
    setInterval(updateDiscordStatus, 8000);
