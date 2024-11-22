// Ось кілька задач для практики роботи з методами filter, find, some, every, reduce, toSorted, та localeCompare для початківців:

// Задачі з filter

// Задача 1 (легка)

// Напишіть функцію getAdults, яка приймає масив об’єктів people, де кожен об’єкт має властивість age. Функція повинна повернути масив людей, яким 18 років або більше.

function getAdults(people) {
  return people.filter((human) => human.age >= 18);
}

const people = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
];

console.log(getAdults(people));
// [{ name: "Bob", age: 25 }, { name: "Charlie", age: 30 }]

console.log("\n");

// Задача 2 (середня)

// Напишіть функцію filterByPrice, яка приймає масив продуктів products та число maxPrice. Функція повинна повернути масив продуктів, ціна яких менша або дорівнює maxPrice.

function filterByPrice(products, maxPrice) {
  return products.filter((prod) => prod.price <= maxPrice);
}

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];

console.log(filterByPrice(products, 500));
// [{ name: "Phone", price: 500 }, { name: "Tablet", price: 300 }]

console.log("\n");

// Задачі з find

// Задача 3 (легка)

// Напишіть функцію findProductByName, яка приймає масив продуктів products та рядок productName. Функція повинна повернути об’єкт продукту, який має вказану назву, або undefined, якщо продукт не знайдений.

function findProductByName(productss, productName) {
  return productss.find((prod) => prod.name === productName);
}

const productss = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];

console.log(findProductByName(products, "Phone"));
// { name: "Phone", price: 500 }

console.log("\n");

// Задачі з some

// Задача 4 (середня)

// Напишіть функцію hasExpensiveProducts, яка приймає масив продуктів products та число minPrice. Функція повинна повернути true, якщо є хоча б один продукт, ціна якого перевищує minPrice.

function hasExpensiveProducts(allproducts, minPrice) {
  return allproducts.some((prod) => prod.price > minPrice);
}

const allproducts = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];

console.log(hasExpensiveProducts(allproducts, 800)); // true
console.log(hasExpensiveProducts(allproducts, 1200)); // false

console.log("\n");

// Задачі з every

// Задача 5 (середня)

// Напишіть функцію areAllAdults, яка приймає масив об’єктів people, де кожен об’єкт має властивість age. Функція повинна повернути true, якщо всі люди у масиві мають 18 років або більше.

function areAllAdults(peoples) {
  return peoples.every((human) => human.age >= 18);
}

const peoples = [
  { name: "Alice", age: 18 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
];

console.log(areAllAdults(peoples)); // true
console.log(areAllAdults([{ name: "Dave", age: 17 }, ...peoples])); // false

console.log("\n");

// Задачі з reduce

// Задача 6 (середня)

// Напишіть функцію calculateTotalPrice, яка приймає масив продуктів products і повертає загальну суму їхніх цін.

function calculateTotalPrice(allProducts) {
  return allProducts.reduce((total, product) => (total += product.price), 0);
}

const allProducts = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];

console.log(calculateTotalPrice(allProducts)); // 1800

console.log("\n");

// Задачі з toSorted

// Задача 7 (складна)

// Напишіть функцію sortProductsByPrice, яка приймає масив продуктів products і повертає новий масив, відсортований за ціною у зростаючому порядку, використовуючи метод toSorted.

function sortProductsByPrice(items) {
  return items.toSorted((a, b) => a.price - b.price);
}

const items = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];

console.log(sortProductsByPrice(items));
// [
//   { name: "Tablet", price: 300 },
//   { name: "Phone", price: 500 },
//   { name: "Laptop", price: 1000 }
// ]

console.log("\n");

// Задачі з localeCompare

// Задача 8 (складна)

// Напишіть функцію sortNames, яка приймає масив рядків names і повертає новий масив, відсортований у алфавітному порядку, використовуючи метод localeCompare.

function sortNames(names) {
  return names.toSorted((a, b) => a.localeCompare(b));
}

console.log(sortNames(["Charlie", "Alice", "Bob"]));
// ["Alice", "Bob", "Charlie"]

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам зрозуміти і попрактикувати використання різних перебираючих методів масивів.
