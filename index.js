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

    this.rotateHoursHand(h, m);
    this.rotateMinutesHand(m);
    this.rotateSecondsHand(s);
  }

  rotateHoursHand(h, m) {
    this.hoursHand.style.transform = `translate(-50%, -100%) rotate(${
      (h / 12) * 360 + m / 2
    }deg)`;
  }

  rotateMinutesHand(m) {
    this.minutesHand.style.transform = `translate(-50%, -100%) rotate(${
      (m / 60) * 360
    }deg)`;
  }

  rotateSecondsHand(s) {
    if (s === 0) {
      this.secondsHand.style.transition = "unset";
    }

    if (s === 1) {
      this.secondsHand.style.transition = "all 0.5s ease-in";
    }

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
