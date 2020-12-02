function log(msg) {
  console.log(msg);
}

setTimeout(() => console.log("timeout"), 0);

setImmediate(function () {
  console.log("setImmediate");
  setImmediate(function () {
    log(1);
    setImmediate(function () {
      log(2);
    });
    setImmediate(function () {
      log(3);
    });
  });
  setImmediate(function () {
    log(4);
    setImmediate(function () {
      log(5);
    });
    setImmediate(function () {
      log(6);
    });
  });
});

process.nextTick(function () {
  console.log("process.nextTick");
  process.nextTick(function () {
    log(1);
    process.nextTick(function () {
      log(2);
    });
    process.nextTick(function () {
      log(3);
    });
  });
  process.nextTick(function () {
    log(4);
    process.nextTick(function () {
      log(5);
    });
    process.nextTick(function () {
      log(6);
    });
  });
});
