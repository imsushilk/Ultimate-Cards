// Generate cards dynamically
export function generateCards(containerSelector, numberOfCards = 14) {
  const container = document.querySelector(containerSelector);
  for (let i = 0; i < numberOfCards; i++) {
    const listItem = document.createElement("li");
    listItem.className = "defaultcard";
    listItem.id = `card${i + 1}`;
    container.appendChild(listItem);
  }
}

// Flip a card
export function flipCard(elem) {
  elem.classList.add("flipping");
  elem.addEventListener("transitionend", function handler() {
    elem.classList.toggle("flippedcard");
    elem.removeEventListener("transitionend", handler);
    elem.classList.remove("flipping");
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
      }, 100);
    });
    setTimeout(resolve, cards.length * 150);
  });
}