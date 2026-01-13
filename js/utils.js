// Set photo URL dynamically
export function setPhotoUrl() {
  const profileName = new URLSearchParams(window.location.search).get("profile");
  if (profileName) {
    document.documentElement.style.setProperty(
      "--profileName",
      `url(../profiles/${profileName}/front.jpg)`
    );
  }
}

// Prevent double-tap zoom on touch devices
export function preventDoubleTapZoom() {
  let lastTouchEnd = 0;
  document.addEventListener(
    "touchend",
    (event) => {
      const now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    },
    { passive: false }
  );
}