// 8-1. 
// Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 
// Приклад роботи:
// upperCase('regexp'); 
// "String's not starts with uppercase character"
// upperCase('RegExp');
// "String's starts with uppercase character"

function upperCase(str) {
    if ((/^[A-Z]/).test(str)) {
        return "String's starts with uppercase character";
    }
    return "String's not starts with uppercase character";
};

console.log(upperCase('regexp'));
console.log(upperCase('RegExp'));
console.log(upperCase('regExp'));

// 8-2. 
// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.
function validateEmail(email) {
    let regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z.]{2,}$/;
    return regExp.test(email);
}
let email = "test-email@example..com";
console.log(validateEmail(email))
// 8-3. 
// Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
// Приклад роботи:
// Вхідний рядок    "Java Script"
// Вихід    “Script, Java”
let regex = /(\S+) (\S+)/i;
("Java Script").replace(regex, '$2, $1');

// 8-4. 
// Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).
let r = /^\d{4}-\d{4}-\d{4}-\d{4}$/;

// 8-5. 
// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
// Вимоги:
// •  Цифри (0-9).
// •  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
// •  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
//  •  Символ “-” не може повторюватися.
function checkEmail(email) {
    const re = /^\w+[-]?\w*$/;
    return re.test(email);
}



// 8-6. 
// Напишіть функцію, яка перевіряє правильність логіна. 
// Правильний логін - рядок від 2 до 10 символів, що містить лише букви та числа, номер не може бути першим. 
// Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).
function checkLogin(login) {
    const re = /^[A-Za-z0-9.]{1,9}$/;
    const isValid = re.test(login);
    const numbers = login.match(/\d+(\.\d+)?/g) || [];
    return { isValid, numbers };
}

let result = checkLogin("user");
console.log(result.isValid);
console.log(result.numbers);