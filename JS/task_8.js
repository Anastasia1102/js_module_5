// Ось кілька задач для практики роботи з деструктуризацією масивів для початківців:

// Задача 1 (легка)

// Видобудьте перші два елементи з масиву colors та присвойте їх у змінні firstColor та secondColor.

const colors = ["red", "blue", "green", "yellow"];

let firstColor = colors[0];
let secondColor = colors[1];

console.log(firstColor); // "red"
console.log(secondColor); // "blue"

console.log("\n");

// Задача 2 (легка)

// Напишіть функцію getFirstAndLast, яка приймає масив і повертає об’єкт із першим і останнім елементами масиву. Використовуйте деструктуризацію.

function getFirstAndLast(arr) {
  return {
    first: arr[0],
    last: arr[arr.length - 1],
  };
}

console.log(getFirstAndLast([1, 2, 3, 4]));
// { first: 1, last: 4 }

console.log(getFirstAndLast(["a", "b", "c", "d"]));
// { first: "a", last: "d" }

console.log("\n");

// Задача 3 (середня)

// Видобудьте перший елемент з масиву як first, а всі інші елементи об’єднайте у новий масив rest.

const numbers = [10, 20, 30, 40, 50];

let first = numbers[0];
let rest = numbers.slice(1);

console.log(first); // 10
console.log(rest); // [20, 30, 40, 50]

console.log("\n");

// Задача 4 (середня)

// Напишіть функцію swapElements, яка приймає масив із двох елементів і повертає новий масив, де порядок елементів змінений місцями. Використовуйте деструктуризацію.

function swapElements([a, b]) {
  return [b, a];
}

console.log(swapElements([1, 2])); // [2, 1]
console.log(swapElements(["first", "second"])); // ["second", "first"]

console.log("\n");

// Задача 5 (складна)

// Напишіть функцію extractMiddle, яка приймає масив чисел із непарною кількістю елементів. Функція повинна повертати середній елемент, використовуючи деструктуризацію.

function extractMiddle(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  return arr[middleIndex];
}

console.log(extractMiddle([1, 2, 3, 4, 5])); // 3
console.log(extractMiddle([10, 20, 30, 40, 50, 60, 70])); // 40

console.log("\n");

// Задача 6 (складна)

// Напишіть функцію splitArray, яка приймає масив чисел і повертає два нові масиви:
//  • Перший масив містить перший елемент,
//  • Другий масив містить усі інші елементи.

function splitArray(arr) {
  let secondArray = arr.slice(1);
  return {
    firstArray: arr[0],
    secondArray,
  };
}

console.log(splitArray([1, 2, 3, 4]));
// { firstArray: [1], secondArray: [2, 3, 4] }

console.log(splitArray([10, 20, 30]));
// { firstArray: [10], secondArray: [20, 30] }

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам розібратися з основами деструктуризації масивів, включаючи виділення елементів, використання залишкових параметрів (...rest), та їх застосування у функціях.
