const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("runApp", () => {
  process.nextTick(() => {
    console.log("listener 1");
  });
});

eventEmitter.on("runApp", () => {
  console.log("listener 2");
});

eventEmitter.emit("runApp");

console.log("emitter finished");
