const names = require('all-the-package-names');

const key = 'kiran';
const matchedNames = names.filter((package) => RegExp(key, 'i').test(package));

console.log(matchedNames);
console.log(`${matchedNames.length} packages found with name ${key}`);
