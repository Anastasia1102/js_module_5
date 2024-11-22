// Ось кілька задач для практики роботи з ланцюжком викликів методів для початківців:

// Задача 1 (легка)

// Вам дано масив чисел. Використовуючи ланцюжок методів, напишіть функцію processNumbers, яка:
//  1. Фільтрує тільки парні числа.
//  2. Зводить кожне парне число в квадрат.
//  3. Повертає новий масив.

function processNumbers(numbers) {
  return numbers.filter((num) => num % 2 === 0).map((num) => num ** 2);
}

console.log(processNumbers([1, 2, 3, 4, 5, 6])); // [4, 16, 36]
console.log(processNumbers([10, 15, 20])); // [100, 400]

console.log("\n");

// Задача 2 (легка)

// Напишіть функцію getUppercaseNames, яка:
//  1. Приймає масив рядків.
//  2. Видаляє всі порожні рядки.
//  3. Перетворює всі рядки в верхній регістр.
//  4. Повертає новий масив.

function getUppercaseNames(names) {
  return names.filter((name) => name !== "").map((name) => name.toUpperCase());
}

console.log(getUppercaseNames(["Alice", "", "Bob", "Charlie", ""]));
// ["ALICE", "BOB", "CHARLIE"]

console.log("\n");

// Задача 3 (середня)

// Створіть функцію processProducts, яка:
//  1. Приймає масив продуктів, кожен із яких має властивості name і price.
//  2. Фільтрує продукти, ціна яких більша за 500.
//  3. Витягує назви цих продуктів.
//  4. Сортує назви у алфавітному порядку.
//  5. Повертає відсортований масив назв.

function processProducts(products) {
  return products
    .filter((prod) => prod.price > 500)
    .map((prod) => prod.name)
    .toSorted((a, b) => a - b);
}

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 700 },
  { name: "Monitor", price: 300 },
];

console.log(processProducts(products));
// ["Laptop", "Tablet"]

console.log("\n");

// Задача 4 (середня)

// Напишіть функцію transformNumbers, яка:
//  1. Приймає масив чисел.
//  2. Фільтрує числа, що менше 10.
//  3. Збільшує кожне з цих чисел на 5.
//  4. Повертає суму всіх отриманих чисел.

function transformNumbers(numbers) {
  return numbers
    .filter((num) => num < 10)
    .map((num) => num + 5)
    .reduce((total, num) => (total += num), 0);
}

console.log(transformNumbers([3, 7, 10, 15])); // 20 (3+5 + 7+5)
console.log(transformNumbers([1, 2, 3])); // 18 (1+5 + 2+5 + 3+5)

console.log("\n");

// Задача 5 (складна)

// Створіть функцію formatUsers, яка:
//  1. Приймає масив об’єктів users, кожен із яких має властивості name і age.
//  2. Фільтрує користувачів, яким 18 років і більше.
//  3. Витягує лише імена користувачів.
//  4. Сортує імена у алфавітному порядку.
//  5. Повертає масив відсортованих імен.

function formatUsers(users) {
  return users
    .filter((user) => user.age >= 18)
    .map((user) => user.name)
    .toSorted((a, b) => a - b);
}

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 },
  { name: "Dave", age: 15 },
];

console.log(formatUsers(users));
// ["Alice", "Charlie"]

console.log("\n");

// Задача 6 (складна)

// Напишіть функцію filterAndMultiply, яка:
//  1. Приймає масив чисел.
//  2. Фільтрує лише парні числа.
//  3. Зводить кожне парне число в квадрат.
//  4. Обчислює загальну суму квадратів.

function filterAndMultiply(numbers) {
  return numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((total, num) => (total += num), 0);
}

console.log(filterAndMultiply([1, 2, 3, 4, 5, 6])); // 56 (2^2 + 4^2 + 6^2)
console.log(filterAndMultiply([10, 15, 20])); // 500 (10^2 + 20^2)

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі навчать вас створювати ланцюжки викликів методів масивів для обробки даних, комбінуючи різні перебираючі методи, такі як filter, map, reduce, sort, та інші.
