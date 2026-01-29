import { flipCard, tiltCard, unhoverCards } from "./cards.js";
import { spreadCards, resetCards } from "./animations.js";

export function addEventListeners() {
  document.querySelectorAll(".defaultcard").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (!card.className.includes("ani")) {
        spreadCards();
      } else {
        if (!card.className.includes("selectedcard")) {
          unhoverCards();
          card.classList.add("selectedcard");
        } else {
          if (!card.className.includes("flippedcard")) {
            flipCard(card).then(() => tiltCard(card));
          } else {
            // unhoverCards();
          }
        }
      }
    });
  });

  document.addEventListener("dblclick", (event) => {
    if (!event.target.classList.contains("selectedcard")) {
      unhoverCards().then(() => resetCards());
    }
  });

  let lastTap = 0;
  document.addEventListener("touchend", (event) => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    if (tapLength < 300 && tapLength > 0) {
      if (!event.target.classList.contains("selectedcard")) {
        unhoverCards().then(() => resetCards());
      }
    }
    lastTap = currentTime;
  });
}