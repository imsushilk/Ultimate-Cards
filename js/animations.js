// Reset cards
export function resetCards() {
  document.querySelectorAll(".defaultcard").forEach((card, i) => {
    setTimeout(() => {
      card.className = "defaultcard";
    }, i * 0.75 * 150);
  });
}

// Spread cards with staggered effect
export function spreadCards() {
  document.querySelectorAll(".defaultcard").forEach((card, i) => {
    setTimeout(() => {
      card.className = "defaultcard ani";
      const cardsSpace =
        (50 / document.querySelectorAll(".defaultcard").length) * i;
      card.style.setProperty("--spacing", `${cardsSpace + 20}%`);
    }, i * 150);
  });
}