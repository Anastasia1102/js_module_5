// Ось кілька задач для практики роботи з методами map та flatMap для початківців:

// Задачі для map

// Задача 1 (легка)

// Напишіть функцію doubleNumbers, яка приймає масив чисел і повертає новий масив, у якому всі числа помножені на 2. Використовуйте метод map.

function doubleNumbers(numbers) {
  return numbers.map((num) => num * 2);
}

console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]
console.log(doubleNumbers([4, 5, 6])); // [8, 10, 12]

console.log("\n");

// Задача 2 (середня)

// Напишіть функцію extractNames, яка приймає масив об’єктів users, де кожен об’єкт має властивість name. Функція повинна повернути масив імен. Використовуйте метод map.

function extractNames(users) {
  return users.map((user) => user.name);
}

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

console.log(extractNames(users)); // ["Alice", "Bob", "Charlie"]

console.log("\n");

// Задача 3 (складна)

// Напишіть функцію addSuffix, яка приймає масив рядків words і рядок suffix. Функція повинна повертати новий масив, у якому до кожного слова додано суфікс. Використовуйте метод map.

function addSuffix(words, suffix) {
  return words.map((word) => word + suffix);
}

console.log(addSuffix(["run", "jump", "play"], "ing")); // ["running", "jumping", "playing"]
console.log(addSuffix(["read", "write"], "able")); // ["readable", "writable"]

console.log("\n");

// Задачі для flatMap

// Задача 1 (легка)

// Напишіть функцію splitWords, яка приймає масив речень і повертає масив окремих слів із кожного речення. Використовуйте метод flatMap.

function splitWords(sentences) {
  return sentences.flatMap((sentenc) => sentenc.split(" "));
}

console.log(splitWords(["Hello world", "How are you"]));
// ["Hello", "world", "How", "are", "you"]

console.log(splitWords(["JavaScript is fun", "I love coding"]));
// ["JavaScript", "is", "fun", "I", "love", "coding"]

console.log("\n");

// Задача 2 (середня)

// Напишіть функцію expandNumbers, яка приймає масив чисел і повертає масив пар [число, квадрат числа] для кожного елемента, використовуючи метод flatMap.

function expandNumbers(numbers) {
  return numbers.flatMap((num) => [num, num ** 2]);
}

console.log(expandNumbers([1, 2, 3]));
// [1, 1, 2, 4, 3, 9]

console.log(expandNumbers([4, 5]));
// [4, 16, 5, 25]

console.log("\n");

// Задача 3 (складна)

// Напишіть функцію expandAndFilter, яка приймає масив чисел. Для кожного числа функція повинна:
//  1. Розширити число на два елементи [число, число * 2].
//  2. Повернути плоский масив лише тих чисел, які більше 10.

// Використовуйте метод flatMap.

function expandAndFilter(numbers) {
  return numbers.flatMap((num) => [num, num * 2]).filter((num) => num > 10);
}

console.log(expandAndFilter([5, 8, 12]));
// [16, 12, 24]

console.log(expandAndFilter([3, 7, 10]));
// []

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам розібратися, як працюють map та flatMap для трансформації масивів і роботи з вкладеними масивами.
