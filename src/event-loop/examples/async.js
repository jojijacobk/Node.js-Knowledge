async function test() {
  return "test";
}

test().then(msg => console.log(msg));

(async () => {
  console.log("await : " + (await test()));
})();

console.log("end");
