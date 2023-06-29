// Task2
alert("Rodik");

//Task3
let firstVariable;
let secondVariable;
firstVariable = 15;
secondVariable = "Fifteen";
alert(firstVariable + " " + secondVariable);
firstVariable = secondVariable;
alert(firstVariable + " " + secondVariable);

//Task4
const obj = {
    String: "Fifteen",
    Number: 15,
    Boolean: true,
    Undefined: undefined,
    Null: null
};

//Task5
const isAdult = confirm("Are you adult?");
alert(isAdult);

//Task6
let firstName;
let lastName;
let group;
let birthYear;
firstName = "Viktoriia";
lastName = "Rodik";
group = "UA-1019";
birthYear = 1986;
const married = true;
console.log(typeof birthYear);
console.log(typeof married);
console.log(typeof firstName);
let anotherVariable;
let lastVariable = null;
console.log(typeof anotherVariable);
console.log(typeof lastVariable);

//Task7
const user = prompt("Enter your name", "Name");
const email = prompt("Enter your email", "example@mail.com");
const password = prompt("Enter your password", "password");
alert(`Dear ${user}, your email is ${email}, your password is ${password}`);



//Task8
const minute = 60;
alert(minute + " seconds in minute");
const hour = 60 * minute;
alert(hour + " seconds in hour");
const day = hour * 24;
alert(day + " seconds in day");
const month = day * 30.44;
alert(month + " seconds in month");

//Additional task
const sit = prompt("Enter your sit", "00");
let coupe = 1;
let type = "lower";
let side = false;
if (sit % 2 === 0) {
    type = "upper";
}
if (sit <= 36) {
    coupe = Math.ceil(sit / 4);

}
if (sit > 36 && sit <= 54) {
    side = true;
    switch (Math.ceil((sit - 36) / 2)) {
        case 1:
            coupe = 9;
            break;
        case 2:
            coupe = 8;
            break;
        case 3:
            coupe = 7;
            break;
        case 4:
            coupe = 6;
            break;
        case 6:
            coupe = 4;
            break;
        case 7:
            coupe = 3;
            break;
        case 8:
            coupe = 2;
            break;
        case 9:
            coupe = 1;
            break;
        default:
            coupe = 5;
            break;

    }
}
alert(`Your sit ${sit} is in the ${coupe}th coupe. It is situated ${type}. The side type is ${side}`);
