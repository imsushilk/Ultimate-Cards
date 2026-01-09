//Generate cards dynamically
const list = document.querySelector(".list");
const numberOfCards = 21; // Define the number of cards

for (let i = 0; i < numberOfCards; i++) {
  const listItem = document.createElement("li");
  listItem.className = "defcard card";
  list.appendChild(listItem);
}

// Add click event listeners to cards
document.querySelectorAll(".defcard").forEach((card) => {
  card.addEventListener("click", () => {
    console.log('click');
    if (card.className.includes("ani")) {
      document.querySelectorAll(".defcard").forEach((card, i) => {
        setTimeout(() => {
          card.className = "defcard card";
          card.style = '';
        }, i * 0.75 * 150);
      });
    } else {
      document.querySelectorAll(".defcard").forEach((card, i) => {
        setTimeout(() => {
          card.className = `defcard card ani`;
          let cardsSpace = (50 / document.querySelectorAll(".defcard").length) * i;
          card.style.right = `${cardsSpace + 20}%`;
        }, i * 150);
      });
      // setTimeout(() => {
      //   document.querySelectorAll(".defcard").forEach((card, i) => {
      //     setTimeout(() => {
      //       card.className = "defcard card";
      //       card.style = '';
      //     }, i * 1 * 150);
      //   });
      // }, 1500);
    }
  });
});

document.body.addEventListener("touchstart", function () {
  document.body.classList.add("no-hover");
  console.log('touchstart');
});

let lastTap = 0;

document.addEventListener("touchend", function (event) {
  const currentTime = new Date().getTime();
  const tapLength = currentTime - lastTap;

  if (tapLength < 300 && tapLength > 0) {
    console.log("Double tap detected");
    document.querySelectorAll(".defcard").forEach((card, i) => {
        setTimeout(() => {
          card.className = "defcard card";
          card.style = '';
        }, i * 0.75 * 150);
      });
  }

  lastTap = currentTime;
});

let lastTouchEnd = 0;

document.addEventListener("touchend", function (event) {
  const now = new Date().getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault(); // Prevent double-tap zoom
  }
  lastTouchEnd = now;
}, { passive: false });