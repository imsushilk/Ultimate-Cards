import { generateCards } from "./cards.js";
import { addEventListeners } from "./events.js";
import { fetchProfileData } from "./utils.js";

function setViewportHeight() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}
setViewportHeight();
window.addEventListener('resize', setViewportHeight);

// Initialize the app
const profileData = await fetchProfileData();
generateCards(".deck-container", 7, profileData);
addEventListeners();