import { setPhotoUrl } from "./utils.js";

export function addEventListeners() {
  document.querySelectorAll(".defaultcard").forEach((card) => {
    card.addEventListener("click", (event) => {
      console.log("Card clicked:", event.target.id);
      card.classList.toggle("rotate");
    });
  });
}

addEventListeners();
setPhotoUrl();