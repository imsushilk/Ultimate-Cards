document.querySelectorAll(".defcard").forEach((card) => {
  card.addEventListener("click", () => {
    console.log(card.className);
    if (card.className.includes("ani")) {
      document.querySelectorAll(".defcard").forEach((card, i) => {
        setTimeout(() => {
          card.className = "defcard card";
          card.style.backgroundColor = "#17141d";
          card.style.right = '50%';
          card.style.bottom = '30%';
          card.style.boxShadow = '';
        }, i * 150);
      });
    } else {
      document.querySelectorAll(".defcard").forEach((card, i) => {
        setTimeout(() => {
          // card.className = `defcard card ani${i}`;
          card.className = `defcard card ani`;
          // card.style.backgroundColor = getRandomColor();
          card.style.right = `${((i+1) * 100) +350}px`;
          card.style.bottom = '50%';
          card.style.boxShadow = '-1rem 0.2rem 0.5rem #000';
        }, i * 150);
      });
      // setTimeout(() => {
      //   document.querySelectorAll(".defcard").forEach((card, i) => {
      //     setTimeout(() => {
      //       card.className = "defcard card";
      //     }, i * 2 * 150);
      //   });
      // }, 1500);
    }


    document.querySelectorAll(".defcard").forEach((card, i) => {
      console.log(i);
      console.log(card.className);
    });
  });
});

const getRandomColor = () => {
  // Generate a random number between 0 and 0xFFFFFF (16777215)
  let randomNumber = Math.floor(Math.random() * 16777215); 
  // Convert the number to a hex string and pad with zeros if necessary
  let color = "#" + randomNumber.toString(16).padStart(6, '0');
  return color.toUpperCase();
};