const tiltInstances = new Map();

// Generate cards dynamically
export function generateCards(containerSelector, numberOfCards = 1, profileData = {}) {
  const container = document.querySelector(containerSelector);
  const number = profileData.number ?? "#00";
  const name = profileData.name ?? "Ursa Major Junior";
  const title = profileData.title ?? "THE TITLE";
  const description = profileData.description ?? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur varius. Sed at ligula a enim efficitur convallis.";
  document.documentElement.style.setProperty(
      "--image",
      `url(../images/${profileData.image})`
    );
  for (let i = 0; i < numberOfCards; i++) {
    container.insertAdjacentHTML("beforeend", `
      <div class="card-container" id="card${i + 1}">
        <div class="defaultcard">
          <div class="frontcard"></div>
          <div class="front box1"></div>
          <div class="front box2"></div>
          <div class="front text" style="font-family: NameFont">
            <div class="num-name">
              <div style="font-size: 1.2em">${number}</div>
              <div style="padding-left: 2%;">${name}</div>
            </div>
            <u><div class="title">${title}</div></u>
            <div class="description">
              ${description}
            </div>
          </div>
          <div class="backcard back"></div>
        </div>
      </div>
    `);
  }
}

function requestTiltPermission() {
  console.log('Requesting tilt permission');
  console.log('DeviceOrientationEvent:', DeviceOrientationEvent.requestPermission);
  if (typeof DeviceOrientationEvent !== 'undefined' &&
      typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission()
      .then(permissionState => {
        if (permissionState !== 'granted') {
          console.warn('Device orientation permission denied');
        }
      })
      .catch(console.error);
  }
}

// Spread cards with staggered effect
export function spreadCards() {
  requestTiltPermission();
  let cardList = document.querySelectorAll(".defaultcard");
  cardList.forEach((card, i) => {
    setTimeout(() => {
      card.className = "defaultcard ani";
      // card.className = "defaultcard";
      const cardsSpace = (50 / cardList.length) * i;
      //   card.style.setProperty("--spacing", `${cardsSpace + 10}%`);
      card.style.setProperty("--index", `${i}`);
      card.style.setProperty("--numberOfCards", `${cardList.length}`);
    }, i * 150);
  });
}

// Flip a card
export function flipCard(elem) {
  return new Promise((resolve) => {
    elem.classList.add("flipping");
    elem.addEventListener("transitionend", function handler() {
      elem.classList.add("rotate");
      elem.removeEventListener("transitionend", handler);
      elem.classList.remove("flipping");
      resolve();
    });
  });
}

export function tiltCard(elem) {
  const container = elem.parentElement; // Get the parent element (div wrapper)
  const instance = VanillaTilt.init(container, {
    max: 20,
    speed: 400,
    scale: 1.1,
    gyroscope: true,
  });
  tiltInstances.set(container, instance);
  container.classList.add("topcard");
}

function destroyTilt(elem) {
  const container = elem.parentElement; // Get the parent element (div wrapper)
  console.log("Attempting to destroy tilt for:", container);
  if (tiltInstances.has(container)) {
       container.vanillaTilt.destroy();
      tiltInstances.delete(container);
      console.log("Destroyed tilt for:", container);
    }
    console.log("Current tilt instances:", tiltInstances);
}

// Unhover all cards
export function unhoverCards() {
  console.log('in unhover');
  console.log(tiltInstances);
  return new Promise((resolve) => {
    const cards = document.querySelectorAll(".selectedcard");
    console.log("Cards to unhover:", cards);
    cards.forEach((card) => {
      card.classList.remove("rotate");
      setTimeout(() => {
        destroyTilt(card);
        card.classList.remove("selectedcard");
        card.parentElement.classList.remove("topcard");
      }, 100);
    });
    setTimeout(resolve, cards.length * 150);
  });
}

// Reset cards
export function resetCards() {
  document.querySelectorAll(".defaultcard").forEach((card, i) => {
    setTimeout(
      () => {
        card.className = "defaultcard";
        destroyTilt(card);
      },
      i * 0.75 * 150,
    );
    card.parentElement.classList.remove("topcard");
  });
}
