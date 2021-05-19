let f = (max) => {
  let check = () => {
    if (!max) {
      let milliSecond = new Date().getMilliseconds();
      console.log(milliSecond % 2 === 0);
      setTimeout(check, 1000);
    } else {
      for (let i = 1; i <= max; i++) {
        setTimeout(() => {
          let milliSecond = new Date().getMilliseconds();
          console.log(milliSecond % 2 === 0);
        }, i * 1000);
      }
    }
  };
  check();
};

f();
