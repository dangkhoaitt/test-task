let f = (delay = 1000, max) => {
  const d = new Date();
  let milliSecond = d.getMilliseconds();
  if (typeof max === "number" && max > 0) {
    for (let i = 1; i <= max; i++) {
      setTimeout(() => {
        console.log(`check lần ${i}`);
        milliSecond %= 2;
      }, delay);
      return milliSecond !== null;
    }
  }
  //   console.log("123 :>> ", 123);
  //   setTimeout(() => {
  //     milliSecond %= 2;
  //   }, delay);
  //   return milliSecond === 0;
};

console.log("f :>> ", f(3000, 3));
