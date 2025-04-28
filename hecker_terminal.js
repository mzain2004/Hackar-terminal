const messages = [
    "Initializing Hacking...",
    "Reading your Files...",
    "Password files Detected...",
    "Sending all passwords and personal files to server...",
    "Cleaning up...",
  ];
  const terminal = document.getElementById("terminal");
  const cursor = document.querySelector(".blinking");
  function getrandomdelay() {
    return Math.floor(Math.random() * 6000) + 1000;
  }
  function showmessage(index = 0) {
    if (index >= messages.length) {
      cursor.style.display = "inline";
      return;
    }
    cursor.style.display = "none";
    const message = messages[index];
    let charIndex = 0;
    const typeinterval = setInterval(() => {
      terminal.innerHTML = terminal.innerHTML.replace(
        '<span class="blinking">█</span>',
        ""
      );
      terminal.innerHTML += message[charIndex];
      charIndex++;

      if (charIndex === message.length) {
        clearInterval(typeinterval);
        terminal.innerHTML += "\n";
        terminal.appendChild(cursor);
        setTimeout(() => showmessage(index + 1), getrandomdelay());
      }
    }, 50);
  }
  showmessage();
  //matrix background animation
  const canvas = document.getElementById("matrixCanvas");
  const ctx = canvas.getContext("2d");
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  const letters = "01";
  const fontsize = 14;
  const columns = canvas.width / fontsize;
  const drops = Array(Math.floor(columns)).fill(1);
  function drawmatrix() {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle="#0f0"
    ctx.font = fontsize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = letters.charAt(
        Math.floor(Math.random() * letters.length)
      );
      ctx.fillText(text, i * fontsize, drops[i] * fontsize);
      if (drops[i] * fontsize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  setInterval(drawmatrix, 33);