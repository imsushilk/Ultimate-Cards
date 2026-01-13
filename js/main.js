import { generateCards } from "./cards.js";
import { addEventListeners } from "./events.js";
import { setPhotoUrl, preventDoubleTapZoom } from "./utils.js";

// Initialize the app
generateCards(".list", 14); // Generate 14 cards
setPhotoUrl();
addEventListeners();
preventDoubleTapZoom();