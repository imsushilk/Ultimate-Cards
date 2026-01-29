// Generate cards dynamically
export function generateCards(containerSelector, numberOfCards = 7) {
  const container = document.querySelector(containerSelector);
  for (let i = 0; i < numberOfCards; i++) {
    const divWrapper = document.createElement("div"); // Create a div wrapper
    // divWrapper.className = "wrap";
    const listItem = document.createElement("li");
    listItem.className = "defaultcard";
    // listItem.className = "defaultcard ani selectedcard flippedcard";
    listItem.id = `card${i + 1}`;
    divWrapper.appendChild(listItem); // Append li to the div wrapper
    container.appendChild(divWrapper); // Append the div wrapper to the container
  }
}

// Flip a card
export function flipCard(elem) {
  elem.classList.add("flipping");
  elem.addEventListener("transitionend", function handler() {
    elem.classList.toggle("flippedcard");
    elem.removeEventListener("transitionend", handler);
    elem.classList.remove("flipping");
    VanillaTilt.init(elem, {
      max: 25,
      speed: 400
    });
  });
}

// Unhover all cards
export function unhoverCards() {
  return new Promise((resolve) => {
    const cards = document.querySelectorAll(".defaultcard.selectedcard");
    cards.forEach((card) => {
      card.classList.remove("flippedcard");
      setTimeout(() => {
        card.classList.remove("selectedcard");
        card.vanillaTilt.destroy();
      }, 100);
    });
    setTimeout(resolve, cards.length * 150);
  });
}
