// Ось кілька задач для практики з використанням операції rest (...) для початківців:

// Задача 1 (легка)

// Створіть функцію sum, яка приймає будь-яку кількість числових аргументів і повертає їхню суму, використовуючи операцію rest.

function sum(...numbers) {
  //   let sum = 0;
  //   for (const num of numbers) {
  //     sum += num;
  //   }
  //   return sum;

  return numbers.reduce((sum, num) => (sum += num), 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(5, 10, 15, 20)); // 50

console.log("\n");

// Задача 2 (легка)

// Напишіть функцію greetUsers, яка приймає перший аргумент greeting (наприклад, “Hello”) і будь-яку кількість імен користувачів, а потім повертає масив, де кожен елемент — це рядок привітання для кожного імені, використовуючи операцію rest.

function greetUsers(greeting, ...names) {
  let greetArr = [];
  names.forEach((name) => {
    greetArr.push(`${greeting}, ${name}!`);
  });
  return greetArr;
}

console.log(greetUsers("Hello", "Alice", "Bob", "Charlie"));
// ["Hello, Alice!", "Hello, Bob!", "Hello, Charlie!"]

console.log(greetUsers("Hi", "John", "Jane"));
// ["Hi, John!", "Hi, Jane!"]

console.log("\n");

// Задача 3 (середня)

// Створіть функцію filterGreaterThan, яка приймає число limit і будь-яку кількість числових аргументів. Функція повинна повертати масив чисел, які більші за limit.

function filterGreaterThan(limit, ...numbers) {
  let nunbersArr = [];
  numbers.forEach((num) => {
    if (num > limit) {
      nunbersArr.push(num);
    }
  });
  return nunbersArr;
}

console.log(filterGreaterThan(10, 5, 15, 20, 8)); // [15, 20]
console.log(filterGreaterThan(3, 1, 4, 6, 2)); // [4, 6]

console.log("\n");

// Задача 4 (середня)

// Напишіть функцію categorizeItems, яка приймає перший аргумент category і будь-яку кількість додаткових аргументів items, а потім повертає об’єкт, де ключ — це категорія, а значення — масив елементів.

function categorizeItems(category, ...items) {
  return { [category]: items };
}

console.log(categorizeItems("Fruits", "Apple", "Banana", "Cherry"));
// { Fruits: ["Apple", "Banana", "Cherry"] }

console.log(categorizeItems("Colors", "Red", "Green", "Blue"));
// { Colors: ["Red", "Green", "Blue"] }

console.log("\n");

// Задача 5 (складна)

// Створіть функцію splitFirstAndRest, яка приймає будь-яку кількість аргументів. Функція повинна повернути об’єкт із двома властивостями:
//  • first — перший аргумент,
//  • rest — масив усіх інших аргументів.

function splitFirstAndRest(...args) {
  const [first, ...rest] = args;
  return { first, rest };
}

console.log(splitFirstAndRest(1, 2, 3, 4));
// { first: 1, rest: [2, 3, 4] }

console.log(splitFirstAndRest("a", "b", "c"));
// { first: "a", rest: ["b", "c"] }

console.log("\n");

// Задача 6 (складна)

// Напишіть функцію mergeArrays, яка приймає перший масив як обов’язковий аргумент і будь-яку кількість інших масивів як залишкові аргументи. Функція повинна повертати новий масив, що містить всі елементи з усіх масивів.

function mergeArrays(firstArray, ...otherArrays) {
  return firstArray.concat(...otherArrays);
}

console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
// [1, 2, 3, 4, 5, 6]

console.log(mergeArrays(["a", "b"], ["c", "d"], ["e", "f"]));
// ["a", "b", "c", "d", "e", "f"]

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам освоїти використання операції rest (...) для роботи з аргументами функцій і динамічними наборами даних.
