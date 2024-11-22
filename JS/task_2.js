// Ось кілька задач для практики з використанням методу forEach для початківців:

// Задача 1 (легка)

// Створіть функцію printElements, яка приймає масив arr і виводить кожен елемент масиву в консоль за допомогою методу forEach.

function printElements(arr) {
  arr.forEach((element) => {
    console.log(element);
  });
}

printElements([1, 2, 3, 4]);
// Вивід:
// 1
// 2
// 3
// 4

console.log("\n");

// Задача 2 (легка)

// Напишіть функцію printStrings, яка приймає масив рядків arr і виводить кожен рядок у консоль з додатковим текстом "Value:", використовуючи метод forEach.

function printStrings(arr) {
  arr.forEach((element) => {
    console.log("Value: " + element);
  });
}

printStrings(["hello", "world", "javascript"]);
// Вивід:
// Value: hello
// Value: world
// Value: javascript

console.log("\n");

// Задача 3 (середня)

// Створіть функцію calculateSum, яка приймає масив чисел arr і обчислює їхню суму, використовуючи метод forEach. Функція повинна повертати результат.

function calculateSum(arr) {
  let sum = 0;

  arr.forEach((element) => {
    sum += element;
  });

  return sum;
}

console.log(calculateSum([1, 2, 3, 4])); // 10
console.log(calculateSum([10, 20, 30])); // 60

console.log("\n");

// Задача 4 (середня)

// Напишіть функцію doubleNumbers, яка приймає масив чисел arr і повертає новий масив, де кожне число подвоєне. Використовуйте метод forEach для зміни значень.

function doubleNumbers(arr) {
  let doubled = [];
  arr.forEach((elem) => {
    doubled.push(elem * 2);
  });
  return doubled;
}

console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]
console.log(doubleNumbers([4, 5, 6])); // [8, 10, 12]

console.log("\n");

// Задача 5 (складна)

// Створіть функцію filterEvens, яка приймає масив чисел arr і повертає новий масив, що містить тільки парні числа. Використовуйте метод forEach для перевірки кожного елемента та додавання парних чисел до нового масиву.

function filterEvens(arr) {
  let evens = [];
  arr.forEach((elem) => {
    if (elem % 2 === 0) {
      evens.push(elem);
    }
  });
  return evens;
}

console.log(filterEvens([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(filterEvens([10, 15, 20, 25])); // [10, 20]

console.log("\n");

// Задача 6 (складна)

// Напишіть функцію logDetails, яка приймає масив об’єктів users, де кожен об’єкт містить властивості name і age. Функція повинна вивести в консоль рядок для кожного користувача у форматі: "Name: [name], Age: [age]", використовуючи метод forEach.

function logDetails(users) {
  users.forEach((elem) => {
    console.log({
      Name: elem.name,
      Age: elem.age,
    });
  });
}

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

logDetails(users);
// Вивід:
// Name: Alice, Age: 25
// Name: Bob, Age: 30
// Name: Charlie, Age: 35

console.log("\n");
console.log("\n");
console.log("\n");
// Ці задачі допоможуть освоїти основні концепції використання методу forEach для обробки масивів та навчать маніпулювати елементами масиву в різних сценаріях.
