document.querySelectorAll(".defcard").forEach((card) => {
  card.addEventListener("click", () => {
    console.log(card.className);
    if (card.className.includes("ani")) {
      document.querySelectorAll(".defcard").forEach((card, i) => {
        setTimeout(() => {
          card.className = "defcard card";
          card.style = '';
        }, i * 150);
      });
    } else {
      document.querySelectorAll(".defcard").forEach((card, i) => {
        setTimeout(() => {
          card.className = `defcard card ani`;
          let cardsSpace = (50 / document.querySelectorAll(".defcard").length) * i;
          card.style.right = `${cardsSpace + 22}%`;
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

const getRandomColor = () => {
  // Generate a random number between 0 and 0xFFFFFF (16777215)
  let randomNumber = Math.floor(Math.random() * 16777215); 
  // Convert the number to a hex string and pad with zeros if necessary
  let color = "#" + randomNumber.toString(16).padStart(6, '0');
  return color.toUpperCase();
};