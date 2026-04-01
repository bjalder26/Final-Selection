function wrongAnswer() {
  const overlay = document.getElementById("overlay");
  const text = document.getElementById("overlayText");
  const sound = document.getElementById("failSound");

  overlay.classList.add("show");
  text.style.opacity = 0;

  // Restart sound cleanly
  sound.pause();
  sound.currentTime = 0;
  sound.play().catch(() => {}); // avoids mobile autoplay errors

  // Slight delay before text appears (feels more intentional)
  setTimeout(() => {
    text.style.opacity = 1;
  }, 250);

  // Remove overlay
  setTimeout(() => {
    overlay.classList.remove("show");
  }, 1400);
}
