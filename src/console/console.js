const ProgressBar = require("progress");

// Demo of console message formatter
console.log(
  "%s is my daughter, and she is %d years old now. %o is my family object.",
  "Kaylin",
  3,
  {dad: "jacob", mom: "seena"}
);

// Demo of console.count

const then = Date.now();
while (Date.now() - then < 1) {
  console.count("hello world");
}

//  Demo of trace
(function consoleTrace() {
  console.trace();
})();

// Demo of time consumed for operation
console.time("breatheIn");
const then2 = Date.now();
while (Date.now() - then2 < 2000) {}
console.timeEnd("breatheIn");
console.time("breatheOut");
const then3 = Date.now();
while (Date.now() - then3 < 1000) {}
console.timeEnd("breatheOut");

// progress bar example
const totalSteps = 60;
const swimmingProgress = new ProgressBar(" Downloading [:bar]", {
  incomplete: " ",
  complete: ">",
  total: totalSteps,
});
let swimUpCount = 0;
const swimTimer = setInterval(() => {
  swimUpCount += 1;
  swimmingProgress.tick();
  if (swimUpCount == totalSteps) {
    clearInterval(swimTimer);
  }
}, 1000);
