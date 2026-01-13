//Generate cards dynamically

function setPhotoUrl() {
  const profileName = new URLSearchParams(window.location.search).get(
    "profile"
  );
  if (profileName) {
    console.log("Setting photo URL to:", profileName);
    document.documentElement.style.setProperty(
      "--profileName",
      `url(profiles/${profileName}/front.jpg)`
    );
  }
}

function generateCards() {
  const list = document.querySelector(".list");
  const numberOfCards = 5; // Define the number of cards
  for (let i = 0; i < numberOfCards; i++) {
    console.log("Generating card", i + 1);
    const listItem = document.createElement("li");
    listItem.className = "defaultcard";
    listItem.id = `card${i + 1}`;
    list.appendChild(listItem);
  }
}

// Functions to reset cards
function resetCards() {
  document.querySelectorAll(".defaultcard").forEach((card, i) => {
    setTimeout(() => {
      card.classList.toggle("flippedcard");
      card.className = "defaultcard ";
    }, i * 0.75 * 150);
  });
}

// Spread cards with staggered effect
function spreadCards() {
  document.querySelectorAll(".defaultcard").forEach((card, i) => {
    setTimeout(() => {
      card.className = "defaultcard ani";
      let cardsSpace =
        (50 / document.querySelectorAll(".defaultcard").length) * i;
      card.style.setProperty("--spacing", `${cardsSpace + 20}%`);
    }, i * 150);
  });
}

function addEventListeners() {
  // Add click event listeners to cards
  document.querySelectorAll(".defaultcard").forEach((card) => {
    card.addEventListener("click", (event) => {
      console.log("click");
      console.log(event.target.id);

      if (!card.className.includes("ani")) {
        spreadCards();
      } else {
        if (!card.className.includes("selectedcard")) {
          unhoverCards();
          card.classList.add("selectedcard");
        } else {
          if (!card.className.includes("flippedcard")) {
            flipCard(card);
          } else {
            unhoverCards();
          }
        }
      }
    });
  });

  //Double click detection for non-touch devices
  document.addEventListener("dblclick", function (event) {
    if (event.target.classList.contains("selectedcard")) {
      console.log("Double-clicked on a card:", event.target.id);
      // Handle double-tap on a card
    } else {
      console.log("Double-tapped in empty space");
      unhoverCards().then(() => {
        resetCards();
      });
    }
  });

  // Double tap detection for touch devices
  let lastTap = 0;

  document.addEventListener("touchend", function (event) {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;

    if (tapLength < 300 && tapLength > 0) {
      if (event.target.classList.contains("selectedcard")) {
        console.log("Double-tapped on a card:", event.target.id);
        // Handle double-tap on a card
      } else {
        console.log("Double-tapped in empty space");
        unhoverCards().then(() => {
          resetCards();
        });
      }
    }

    lastTap = currentTime;
  });
}

// Remove hover class from all cards
function unhoverCards() {
  return new Promise((resolve) => {
    const cards = document.querySelectorAll(".defaultcard.selectedcard");
    cards.forEach((card) => {
      // Remove 'flippedcard' first
      card.classList.remove("flippedcard");

      // Remove 'selectedcard' after a short delay
      setTimeout(() => {
        card.classList.remove("selectedcard");
      }, 100); // Adjust the delay as needed
    });

    // Resolve the promise after all cards are processed
    setTimeout(resolve, cards.length * 150);
  });
}

function flipCard(elem) {
  elem.classList.add("flipping");
  elem.addEventListener("transitionend", function handler() {
    elem.classList.toggle("flippedcard");
    elem.removeEventListener("transitionend", handler);
    elem.classList.remove("flipping");
  });
}

function preventDoubleTapZoom() {
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

// Initialize the script
generateCards();
setPhotoUrl();
addEventListeners();
preventDoubleTapZoom();
