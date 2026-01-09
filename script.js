//Generate cards dynamically
const list = document.querySelector(".list");
const numberOfCards = 5; // Define the number of cards

for (let i = 0; i < numberOfCards; i++) {
  const listItem = document.createElement("li");
  listItem.className = "defaultcard ";
  listItem.id = `card${i + 1}`;
  list.appendChild(listItem);
}

// Functions to reset cards
function resetCards() {
  document.querySelectorAll(".defaultcard").forEach((card, i) => {
    setTimeout(() => {
      card.className = "defaultcard ";
      card.style = "";
    }, i * 0.75 * 150);
  });
}

// Spread cards with staggered effect
function spreadCards() {
  document.querySelectorAll(".defaultcard").forEach((card, i) => {
    setTimeout(() => {
      card.className = "defaultcard card ani";
      let cardsSpace =
        (50 / document.querySelectorAll(".defaultcard").length) * i;
      card.style.right = `${cardsSpace + 20}%`;
    }, i * 150);
  });
}

// Add click event listeners to cards
document.querySelectorAll(".defaultcard").forEach((card) => {
  card.addEventListener("click", (event) => {
    console.log("click");
    console.log(event.target.id);
    if (card.className.includes("ani")) {
      if (!card.className.includes("selectedcard")) {
        unhoverCards();
        card.classList.add("selectedcard");
      } else {
        card.classList.remove("selectedcard");
      }
    } else {
      this.spreadCards();
    }
  });
});

// Remove hover class from all cards
function unhoverCards() {
  return new Promise((resolve) => {
    document.querySelectorAll(".defaultcard.selectedcard").forEach((card) => {
      card.classList.remove("selectedcard");
    });
    resolve();
  });
}

// Double tap detection for touch devices
let lastTap = 0;

document.addEventListener("touchend", function (event) {
  const currentTime = new Date().getTime();
  const tapLength = currentTime - lastTap;

  if (tapLength < 300 && tapLength > 0) {
    if (event.target.classList.contains("selectedcard")) {
      console.log("Double-tapped on a card:", event.target.id);
      // Handle double-tap on a card
      flipCard(event.target);
    } else {
      console.log("Double-tapped in empty space");
      unhoverCards().then(() => {
      resetCards();
    });
    }
  }

  lastTap = currentTime;
});

// Prevent double-tap zoom
let lastTouchEnd = 0;

document.addEventListener(
  "touchend",
  function (event) {
    const now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault(); // Prevent double-tap zoom
    }
    lastTouchEnd = now;
  },
  { passive: false }
);

function flipCard(elem) {
    elem.classList.add("flipping");
    elem.addEventListener("transitionend", function handler() {
        elem.classList.toggle("flippedcard");
        elem.removeEventListener("transitionend", handler);
        elem.classList.remove("flipping");
    })
}