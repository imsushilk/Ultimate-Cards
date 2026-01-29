// Reset cards
export function resetCards() {
  document.querySelectorAll(".defaultcard").forEach((card, i) => {
    setTimeout(() => {
      card.className = "defaultcard";
      card.vanillaTilt.destroy();
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
      //   card.style.setProperty("--spacing", `${cardsSpace + 10}%`);
      card.style.setProperty("--index", `${i}`);
      card.style.setProperty(
        "--numberOfCards",
        `${document.querySelectorAll(".defaultcard").length}`
      );
    }, i * 150);
  });
}
