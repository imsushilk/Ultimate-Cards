import { generateCards } from "./cards.js";
import { addEventListeners } from "./events.js";
import { fetchProfileData } from "./utils.js";

// Initialize the app
const profileData = await fetchProfileData();
generateCards(".deck-container", 7, profileData);
addEventListeners();