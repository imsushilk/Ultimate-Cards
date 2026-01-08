document.querySelectorAll('.defcard').forEach((card) => {
  card.addEventListener('click', () => {
    if (card.className.includes('ani')) {
      document.querySelectorAll('.defcard').forEach((card, i) => {
        setTimeout(() => {
          card.className = 'defcard card';
        }, i * 150);
      });
    } else {
      document.querySelectorAll('.defcard').forEach((card, i) => {
        setTimeout(() => {
          card.className = `defcard card ani${i}`;
        }, i * 150);
      });
      document.querySelectorAll('.defcard').forEach((card, i) => {
        setTimeout(() => {
          card.className = 'defcard card';
        }, i * 150);
      });
    }
  });
});
