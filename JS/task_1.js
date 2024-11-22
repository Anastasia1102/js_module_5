"use strict";
// Ось кілька задач для практики роботи з використанням callback-функцій для початківців:

// Задача 1 (легка)

// Напишіть функцію processNumber, яка приймає число num і callback-функцію callback. Функція повинна викликати callback, передаючи йому число num, і повертати результат.

function processNumber(num, callback) {
  return callback(num);
}

function double(n) {
  return n * 2;
}

console.log(processNumber(5, double)); // 10
console.log(processNumber(10, double)); // 20

console.log("\n");

// Задача 2 (легка)

// Створіть функцію applyToArray, яка приймає масив чисел arr і callback-функцію callback. Функція повинна повертати новий масив, отриманий шляхом виклику callback для кожного елемента масиву.

function applyToArray(arr, callback) {
  let newArr = [];
  for (const element of arr) {
    newArr.push(callback(element));
  }
  return newArr;
}

function square(n) {
  return n * n;
}

console.log(applyToArray([1, 2, 3, 4], square)); // [1, 4, 9, 16]
console.log(applyToArray([2, 4, 6], square)); // [4, 16, 36]

console.log("\n");

// Задача 3 (середня)

// Напишіть функцію filterArray, яка приймає масив arr і callback-функцію callback. Функція повинна повертати новий масив, що містить лише ті елементи, для яких callback повертає true.

function filterArray(arr, callback) {
  let newArr = [];
  for (const element of arr) {
    if (callback(element) === true) {
      newArr.push(element);
    }
  }
  return newArr;
}

function isEven(n) {
  return n % 2 === 0;
}

console.log(filterArray([1, 2, 3, 4, 5], isEven)); // [2, 4]
console.log(filterArray([10, 15, 20, 25], isEven)); // [10, 20]

console.log("\n");

// Задача 4 (середня)

// Створіть функцію processStrings, яка приймає масив рядків arr і callback-функцію callback. Функція повинна повертати новий масив рядків, оброблених за допомогою callback.

function processStrings(arr, callback) {
  let newArr = [];
  for (const element of arr) {
    newArr.push(callback(element));
  }
  return newArr;
}

function toUpperCase(str) {
  return str.toUpperCase();
}

console.log(processStrings(["hello", "world"], toUpperCase)); // ["HELLO", "WORLD"]
console.log(processStrings(["javascript", "callbacks"], toUpperCase)); // ["JAVASCRIPT", "CALLBACKS"]

console.log("\n");

// Задача 5 (складна)

// Напишіть функцію performOperation, яка приймає два числа a і b, а також callback-функцію operation. Функція повинна виконувати операцію, передану через operation, і повертати результат.

function performOperation(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(performOperation(3, 5, add)); // 8
console.log(performOperation(4, 6, multiply)); // 24

console.log("\n");

// Задача 6 (складна)

// Створіть функцію executeWithDelay, яка приймає повідомлення message, затримку delay у мілісекундах і callback-функцію callback. Функція повинна викликати callback через задану затримку.

function executeWithDelay(message, delay, callback) {
  setTimeout(() => {
    callback(message);
  }, delay);
}

function displayMessage(msg) {
  console.log(msg);
}

executeWithDelay("Hello after 2 seconds", 2000, displayMessage);
// Після 2 секунд виведе: "Hello after 2 seconds"

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть зрозуміти, як працюють callback-функції, та навчать застосовувати їх для виконання операцій з масивами, числами, рядками та асинхронними діями.
