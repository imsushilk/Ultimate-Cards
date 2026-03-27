import { flipCard, tiltCard, unhoverCards, spreadCards, resetCards } from "./cards.js";

export function addEventListeners() {
  cardAnimation();

  document.addEventListener("dblclick", (event) => {
    onDoubleTap(event);
  });

  let lastTap = 0;
  document.addEventListener("touchend", (event) => {
    const currentTime = Date.now();
    const tapLength = currentTime - lastTap;
    if (tapLength < 300 && tapLength > 0) {
      event.preventDefault();
      onDoubleTap(event);
    }
    lastTap = currentTime;
  });
}

function cardAnimation() {
  document.querySelectorAll(".defaultcard").forEach((card) => {
    card.addEventListener("click", (event) => {
      console.log("Card clicked:", event.target);
      if (!card.classList.contains("ani")) {
        spreadCards();
      } else {
        if (!card.classList.contains("selectedcard")) {
          unhoverCards();
          card.classList.add("selectedcard");
        } else {
          if (!card.classList.contains("rotate")) {
            console.log('why here?');
            console.log(card);
            flipCard(card).then(() => tiltCard(card));
            // flipCard(card);
          }
        }
      }
    });
  });
}

function onDoubleTap(event) {
  console.log("Double tap detected:", event.target);
  if (!event.target.classList.contains("selectedcard")) {
    unhoverCards().then(() => resetCards());
  }
}
