const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.write("Welcome to Indian city name recognizer\n");

readline.question("Which is your favourite city?", answer => {
  readline.pause();
  console.log(answer);
});

const namesCollection = [
  "kottayam",
  "kochi",
  "ernakulam",
  "kozhencherry",
  "kannur",
  "kasarkod",
  "kollam",
  "thiruvananthapuram",
  "thiruvaniyoor",
  "pathanamthitta",
  "peruva",
];

process.stdin.on("keypress", char => {
  if (char == "") return;
  const matches = namesCollection
    .filter(name => name.startsWith(readline.line))
    .join("\n");
  console.log(matches);
});
