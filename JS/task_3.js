// Ось кілька задач для практики зі стрілочними функціями для початківців:

// Задача 1 (легка)

// Напишіть стрілочну функцію add, яка приймає два числа і повертає їх суму.

const add = (a, b) => {
  return a + b;
};

console.log(add(2, 3)); // 5
console.log(add(10, 20)); // 30

console.log("\n");

// Задача 2 (легка)

// Створіть стрілочну функцію greet, яка приймає ім’я name і повертає рядок "Hello, [name]!".

const greet = (name) => {
  return `Hello, ${name}!`;
};

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob")); // "Hello, Bob!"

console.log("\n");

// Задача 3 (середня)

// Напишіть стрілочну функцію squareArray, яка приймає масив чисел і повертає новий масив, де кожне число зведене в квадрат.

const squareArray = (arr) => {
  let newArr = [];
  arr.forEach((element) => {
    newArr.push(element ** 2);
  });
  return newArr;
};

console.log(squareArray([1, 2, 3])); // [1, 4, 9]
console.log(squareArray([4, 5, 6])); // [16, 25, 36]

console.log("\n");

// Задача 4 (середня)

// Створіть стрілочну функцію filterOddNumbers, яка приймає масив чисел і повертає новий масив, що містить тільки непарні числа.

const filterOddNumbers = (arr) => {
  let newArr = [];
  arr.forEach((elem) => {
    if (elem % 2 !== 0) {
      newArr.push(elem);
    }
  });
  return newArr;
};

console.log(filterOddNumbers([1, 2, 3, 4, 5])); // [1, 3, 5]
console.log(filterOddNumbers([10, 15, 20, 25])); // [15, 25]

console.log("\n");

// Задача 5 (складна)

// Напишіть стрілочну функцію calculateTotal, яка приймає масив чисел і повертає їхню суму.

const calculateTotal = (arr) => {
  let sum = 0;
  arr.forEach((elem) => {
    sum += elem;
  });
  return sum;
};

console.log(calculateTotal([1, 2, 3, 4])); // 10
console.log(calculateTotal([5, 10, 15])); // 30

console.log("\n");

// Задача 6 (складна)

// Створіть стрілочну функцію getNames, яка приймає масив об’єктів users, де кожен об’єкт має властивість name, і повертає масив всіх імен.

const getNames = (users) => {
  let objNames = [];
  users.forEach((elem) => {
    objNames.push(elem.name);
  });
  return objNames;
};

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

console.log(getNames(users)); // ["Alice", "Bob", "Charlie"]

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам освоїти основи роботи зі стрілочними функціями, навчать їх використовувати для простих і складніших операцій з даними.
