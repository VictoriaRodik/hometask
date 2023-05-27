// 1.
// Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа (first и second) – порядкові номери елементів масиву, які необхідно скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва більшого розміруза довжину масиву. Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
function sumSliceArray(arr, first, second) {
  if (isNaN(first) || isNaN(second)) {
    throw new TypeError("Not a number");
  } else if (first > arr.length || second > arr.length) {
    throw new RangeError("Number is out of the array length");
  }
  return arr[first] + arr[second];
}
try {
  sumSliceArray([2, 3, 4, 6, 7, 8], "hello", 12);
} catch (exception) {
  console.log(exception.name);
  console.log(exception.message);
  console.log(exception.stack);
}

// 2.
// Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач) та генерує модальне вікно з помилкою, якщо:вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field is empty! Please enter your age з типом помилки Error). У полі статус введено неправильне слово (тип помилки EvalError).в полі вік введено нечислове значення. У всіх інших випадках користувач отримає доступ до перегляду фільму. У блоці catch передбачена можливість виведення назви та опису помилки.
function checkAge() {
  let userName = prompt("Enter your name", "Name");
  let userAge = prompt("Enter your age", "Age");
  let userStatus = prompt("Enter your status", "Status");
  if (userName === "") {
    throw new Error("The field is empty! Please enter your name");
  };
  if (userAge === "") {
    throw new Error("The field is empty! Please enter your age");
  } else if (isNaN(userAge)) {
    throw new TypeError("Your age is not a number");
  } else if (userAge < 18 || userAge > 70) {
    throw new RangeError("Your age is out of range");
  };
  if (userStatus === "") {
    throw new Error("The field is empty! Please enter your status");
  } else if (userStatus != "admin" && userStatus !== "moderator" && userStatus !== "user") {
    throw new EvalError("The status is incorrect");
  }
  return "You're welcome!"
}

try {
  checkAge();
} catch (error) {
  console.log(error.name);
  alert(error.message);
  console.log(error.stack);
}
// 3.
// Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
function calcRectangleArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw new TypeError("Not a number");
  }
  return width * height;
}
try {
  calcRectangleArea("hello", 1);
} catch (exception) {
  console.log(exception.name);
  console.log(exception.message);
  console.log(exception.stack);
}

// 4.
// Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням MonthException.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням Incorrect month number.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// Приклад роботи програми:
// console.log(showMonthName(5));
// May
// console.log(showMonthName(14));
// MonthException Incorrect month number

class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = "MonthException";
    this.message = message;
  }
}
function showMonthName(month) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  switch (month) {
    case 1:
      return months[0];
      break;
    case 2:
      return months[1];
      break;
    case 3:
      return months[2];
      break;
    case 4:
      return months[3];
      break;
    case 5:
      return months[4];
      break;
    case 6:
      return months[5];
      break;
    case 7:
      return months[6];
      break;
    case 8:
      return months[7];
      break;
    case 9:
      return months[8];
      break;
    case 10:
      return months[9];
      break;
    case 11:
      return months[10];
      break;
    case 12:
      return months[11];
      break;
    default:
      throw new MonthException("Incorrect month number");
  }
}
try {
  showMonthName(20);
} catch (exception) {
  console.log(exception.name);
  console.log(exception.message);
}


// Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.
// Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність, в разі виключної ситуації виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.

// Приклад роботи програми:
// showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]
function showUser(id) {
  const user = {};
  if (id < 0) {
    throw new Error("ID must not be negative:" + id);
  }
  user.id = id;
  return user;
}
function showUsers(ids) {
  const users = [];
  for (let i = 0; i < ids.length; i++) {
    try {
      users.push(showUser(ids[i]));
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
    }
  }
  return users;
}
console.log(showUsers([7, -12, 44, 22]));

