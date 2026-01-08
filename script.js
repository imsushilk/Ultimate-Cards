/*document.querySelector('.stack').addEventListener('click', () => {
  document.querySelectorAll('.card').forEach((card, i) => {
    setTimeout(() => {
      card.className = 'card';
    }, i * 150);
  });
});

document.querySelector('.spread').addEventListener('click', () => {
  document.querySelectorAll('.card').forEach((card, i) => {
    setTimeout(() => {
      card.className = 'card ani' + i;
    }, i * 150);
  });
});*/

document.querySelectorAll('.defcard').forEach((card) => {
  card.addEventListener('click', () => {
    if (card.classList.contains('ani')) {
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
    }
  });
});
