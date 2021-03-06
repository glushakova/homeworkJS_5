for (let i = 0; i < 100; i++) {
  setTimeout(i => console.log(i), 1000 * i, i);
}

function repeat(i = 0) {
  let start = Date.now();
  setTimeout(
    () => {
      console.log(
        `переменная равна ${i}, выводит через ${(
          (Date.now() - start) /
          1000
        ).toFixed(0)} с`
      );
      repeat(i + 1);
    },
    1000 * (i + 1),
    i
  );
}

repeat();

function factorial(x) {
  if (x === 1) {
    return x;
  } else if (x === 0) {
    return "введите число от 1";
  } else {
    return x * factorial(x - 1);
  }
}

console.log(`${factorial(20)} факториалом числа 20`);
