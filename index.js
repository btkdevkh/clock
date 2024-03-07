class CLock {
  constructor(hoursHand, minutesHand, secondsHand) {
    this.hoursHand = hoursHand;
    this.minutesHand = minutesHand;
    this.secondsHand = secondsHand;
  }

  tick() {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    this.rotateHoursHand(h);
    this.rotateMinutesHand(m);
    this.rotateSecondsHand(s);
  }

  rotateHoursHand(h) {
    this.hoursHand.style.transform = `translate(-50%, -100%) rotate(${
      (h / 12) * 360
    }deg)`;
  }

  rotateMinutesHand(m) {
    this.minutesHand.style.transform = `translate(-50%, -100%) rotate(${
      (m / 60) * 360
    }deg)`;
  }

  rotateSecondsHand(s) {
    this.secondsHand.style.transform = `translate(-50%, -100%) rotate(${
      (s / 60) * 360
    }deg)`;
  }
}

// Dom elements
const hoursHand = document.querySelector("#hours-hand");
const minutesHand = document.querySelector("#minutes-hand");
const secondsHand = document.querySelector("#seconds-hand");

// Instanciation clock object
const myClock = new CLock(hoursHand, minutesHand, secondsHand);
setInterval(() => myClock.tick(), 1000);