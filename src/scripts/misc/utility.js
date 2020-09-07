const infoCard = document.querySelector('#info-card');

const showInfo = (message) => {
  infoCard.style.display = 'block';
  const card = infoCard.querySelector('.card-body');
  card.innerHTML = message;
};

const hideInfo = () => {
  infoCard.style.display = 'none';
};

export { showInfo, hideInfo };
