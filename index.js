function f(max) {
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
}

// function generateTime(hours) {
//   let result = [];
//   let i = 0;
//   do {
//     let a = [];
//     i += 1;
//     a.push("a");
//     if (i < 5) result.push(a.join("-"));
//   } while (i < 5);

//   console.log(result);
// }
// generateTime(5);

function delay(delayInms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}

async function LogNumber(arrNum) {
  let i = 0;
  let log = async () => {
    await delay(1000);
    i++;
    console.log(arrNum[i]);
    if (i === arrNum.length - 1) return;
    else await log();
  };
  log();
}

let numbers = [0, 1, 2, 3, 4, 5];
LogNumber(numbers);
