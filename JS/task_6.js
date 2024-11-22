// Ось кілька задач для практики роботи з перебираючими методами масивів (map, filter, reduce, forEach, find, some, every) для початківців:

// Задача 1 (легка, forEach)

// Напишіть функцію logElements, яка приймає масив і виводить у консоль кожен елемент масиву за допомогою методу forEach.

function logElements(arr) {
  arr.forEach((element) => {
    console.log(element);
  });
}

logElements([1, 2, 3, 4]);
// Вивід:
// 1
// 2
// 3
// 4

console.log("\n");

// Задача 2 (легка, map)

// Напишіть функцію convertToUpperCase, яка приймає масив рядків і повертає новий масив, у якому всі рядки перетворені у верхній регістр. Використовуйте метод map.

function convertToUpperCase(strings) {
  return strings.map((str) => str.toUpperCase());
}

console.log(convertToUpperCase(["hello", "world"])); // ["HELLO", "WORLD"]
console.log(convertToUpperCase(["javascript", "is", "fun"])); // ["JAVASCRIPT", "IS", "FUN"]

console.log("\n");

// Задача 3 (середня, filter)

// Напишіть функцію filterByLength, яка приймає масив рядків і число length. Функція повинна повернути новий масив, який містить лише ті рядки, довжина яких більша за length. Використовуйте метод filter.

function filterByLength(strings, length) {
  return strings.filter((str) => str.length > length);
}

console.log(filterByLength(["apple", "banana", "kiwi", "cherry"], 5)); // ["banana", "cherry"]
console.log(filterByLength(["dog", "elephant", "cat"], 3)); // ["elephant"]

console.log("\n");

// Задача 4 (середня, reduce)

// Створіть функцію calculateTotal, яка приймає масив чисел і повертає їхню суму. Використовуйте метод reduce.

function calculateTotal(numbers) {
  return numbers.reduce((sum, num) => (sum += num));
}

console.log(calculateTotal([1, 2, 3, 4])); // 10
console.log(calculateTotal([5, 10, 15])); // 30

console.log("\n");

// Задача 5 (середня, find)

// Напишіть функцію findFirstEven, яка приймає масив чисел і повертає перше парне число в масиві. Якщо парного числа немає, поверніть null. Використовуйте метод find.

function findFirstEven(numbers) {
  return numbers.find((num) => num % 2 === 0) || null;
}

console.log(findFirstEven([1, 3, 5, 4, 6])); // 4
console.log(findFirstEven([1, 3, 5])); // null

console.log("\n");

// Задача 6 (складна, some та every)

// Напишіть функцію hasEvenNumbers, яка приймає масив чисел і повертає true, якщо хоча б одне число є парним. Використовуйте метод some.
// Напишіть функцію allPositiveNumbers, яка приймає масив чисел і повертає true, якщо всі числа додатні. Використовуйте метод every.

function hasEvenNumbers(numbers) {
  return numbers.some((num) => num % 2 === 0);
}

function allPositiveNumbers(numbers) {
  return numbers.every((num) => num > 0);
}

console.log(hasEvenNumbers([1, 3, 5, 4])); // true
console.log(hasEvenNumbers([1, 3, 5])); // false

console.log(allPositiveNumbers([1, 2, 3, 4])); // true
console.log(allPositiveNumbers([1, -2, 3])); // false

console.log("\n");

// Задача 7 (складна, комбінування filter та map)

// Створіть функцію getSquaresOfEvens, яка приймає масив чисел і повертає новий масив, що містить квадрати тільки парних чисел. Використовуйте методи filter і map.

function getSquaresOfEvens(numbers) {
  return numbers.filter((num) => num % 2 === 0).map((num) => num ** 2);
}

console.log(getSquaresOfEvens([1, 2, 3, 4, 5])); // [4, 16]
console.log(getSquaresOfEvens([10, 15, 20])); // [100, 400]

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам освоїти основні перебираючі методи масивів та навчитися комбінувати їх для обробки даних.
