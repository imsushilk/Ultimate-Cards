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

document.querySelector('.card').addEventListener('click', () => {
  document.querySelectorAll('.card').forEach((card, i) => {
    setTimeout(() => {
      card.className = 'card ani' + i + '  anicard';
    }, i * 150);
  });
})

document.querySelector('.anicard').addEventListener('click', () => {
  document.querySelectorAll('.anicard').forEach((card, i) => {
    setTimeout(() => {
      card.className = 'card';
    }, i * 150);
  });
})
