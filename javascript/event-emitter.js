class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);
  }

 
  emit(eventName, ...args) {
    if (!this.events[eventName]) return;

    this.events[eventName].forEach(callback => {
      callback(...args);
    });
  }

  off(eventName, callback) {
    if (!this.events[eventName]) return;

    this.events[eventName] = this.events[eventName].filter(
      cb => cb !== callback
    );
  }
}

const emitter = new EventEmitter();


emitter.on("userLoggedIn", (user) => {
  console.log("Welcome:", user.name);
});

emitter.on("userLoggedIn", (user) => {
  console.log("Login time:", user.time);
});

emitter.emit("userLoggedIn", {
  name: "Abhishek",
  time: "10:30 AM"
});