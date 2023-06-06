// 7-1. 
// За допомогою методів об’єкта window створити:
//         1) нове вікно розміром 300х300 пікселів.
//         2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
//         3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
//         4) із затримкою 2 сек закрийте вікно.
// let newWindow = window.open("https://www.google.com", "Google", "width=800, height=400, top=200, left=150");
// newWindow.close();
// newWindow.moveTo(400,400)
// newWindow.resizeTo()


// function clickHandler(){
//     console.log("it works from js");
// }

// const title = document.querySelector('.title');


// title.onclick = function(){
//     console.log("it works again");
// }

// title.addEventListener("click",function(){
//     console.log("added event listener");
// })

// function clickHandler(){
//     console.log("it works from js");
// }

// title.addEventListener("click", clickHandler());

// title.addEventListener("click",function(event){
//     // console.log(event.target);
//     event.target.style.color = "green";
// })

// const btn = document.querySelector('.btn');
// const inp = document.querySelector('.inp');

// btn.addEventListener("click",function(){
//     title.style.backgroundColor = "red";
// });

// btn.addEventListener("click", function(){
//     console.log(inp.value);
//     inp.value = "";
// })

// const loginForm = document.querySelector('.loginForm');
// const name = document.querySelector("#name");
// const password = document.querySelector("#password");


// loginForm.addEventListener("submit", function(event){
//     event.preventDefault();
//     console.log(`Your login is ${loginForm.elements["login"]} and password is ${loginForm.elements["password"]}`);
// })

// setTimeout(function(){
//     console.log("im here after 3 seconds");
// }, 3000);


//Task1
// let newWindow = window.open("https://www.google.com", "Google", "width=300, height=300");
// setTimeout(function() {
// newWindow.resizeTo(width = 300, height = 300);
// newWindow.moveTo(200, 200);
// newWindow.close();
// }, 2000);
// setTimeout();


// напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS".

//Task2
// const btn = document.querySelector("button");
// const text = document.querySelector("#text");
// btn.addEventListener("click",function(){
//   text.style.color = "orange";
//   text.style.fontSize = "20px";
//   text.style.fontFamily = "Comic Sans MS";  
// });

// 7-3. 
// Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
//         4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
//         Приклад – курсор наведений на лінку.
//Task3
// const page = document.documentElement;
// const blueBtn = document.querySelector("#blueBtn");
// const pinkBtn = document.querySelector("#pinkBtn");
// const brownBtn = document.querySelector("#brownBtn");
// const yellowLink = document.querySelector("#yellowLink");

// blueBtn.addEventListener("click", function() {
//   page.style.backgroundColor = "blue";
// });
// pinkBtn.addEventListener("dblclick", function() {
//   page.style.backgroundColor = "pink";
// });
// brownBtn.addEventListener("mousedown", function() {
//   page.style.backgroundColor = "brown";
// });
// brownBtn.addEventListener("mouseup", function() {
//   page.style.backgroundColor = "white";
// });
// yellowLink.addEventListener("mouseover", function() {
//   page.style.backgroundColor = "yellow";
// });
// yellowLink.addEventListener("mouseout", function() {
//   page.style.backgroundColor = "white";
// });

// 7-4. 
// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. Можуть видалятися всі елементи в будь-якому порядку.
// Task4
// const btn = document.querySelector("button");
// const dataName = document.querySelector("#dataName");
// const options = document.querySelectorAll("option");
// btn.addEventListener("click", function(){
//   options.forEach(function(option){
//    if (option.getAttribute("value")===(dataName.value)){ 
//      option.remove();
//      dataName.value = "";
//    } 
//   })
// });
// 7-5. 
// Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
// "I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
// Task5
let btn = document.createElement("button");
document.body.append(btn);
btn.innerText = "Live Button!";
btn.addEventListener("click", function(){
  let pressedText = document.createElement("h1");
  document.body.append(pressedText);
  pressedText.innerText = "I was pressed!";
});
btn.addEventListener("mouseover", function(){
  let onText = document.createElement("h2");
  document.body.append(onText);
  onText.innerText = "Mouse on me!";
});
btn.addEventListener("mouseout", function(){
  let notOnText = document.createElement("h3");
  document.body.append(notOnText);
  notOnText.innerText = "Mouse is not on me!";
});


