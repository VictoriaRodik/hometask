//Task1
// const list = document.getElementById("list");
// const items = document.getElementsByTagName("li");
// let content = '';
// content += items[0].innerText + ", ";
// content += items[items.length - 1].innerText + ", ";
// content += items[1].innerText + ", ";
// content += items[3].innerText + ", ";
// content += items[2].innerText;
// alert(content);

//Task2 
// const bigHeader = document.querySelector("h1");
// bigHeader.style.backgroundColor = "#90EE90";
// const myDiv = document.getElementById("myDiv");
// const myDivItems = myDiv.children;
// myDivItems[0].style.fontWeight = "bold";
// myDivItems[1].style.color = "red";
// myDivItems[2].style.textDecoration = "underline";
// myDivItems[3].style.fontStyle = "Italic";
// const myList = document.getElementById("myList");
// const myListItems = myList.children;
// let myListArr = [];
// for (i = 0; i < myListItems.length; i++) {
//     myListArr.push(myListItems[i].innerHTML);
//     myListItems[i].innerHTML = "";
//     myListItems[i].style.listStyleType = "none";
// }
// myListItems[0].innerHTML = myListArr.join("");

// const invisible = document.querySelector("span");
// invisible.style.display = "none";

// Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// <body>
//   main class="mainClass check item">
//      <div id="myDiv">
//          <p>First paragraph</p>
//      </div>
//  </main>
// </body>

//Task3
// document.querySelector("body").innerHTML=`
// <main class="mainClass check item">
//       <div id="myDiv">
//           <p>First paragraph</p>
//       </div>
//   </main>`;

// or
// const body = document.querySelector("body");
// let newMain = document.createElement("main");
// let newDiv = document.createElement("div");
// let newParagraph = document.createElement("p");

// newMain.className = "mainClass check item";
// newDiv.className = "myDiv";
// newParagraph.innerHTML = "First paragraph";

// body.prepend(newMain);
// newMain.prepend(newDiv);
// newDiv.prepend(newParagraph);



// 4.
// const submitBtn = document.querySelector(".btn");
// const outBlock = document.querySelector(".out");
// submitBtn.addEventListener("click", function (event) {
//     event.preventDefault();
//     const arrFields = document.querySelectorAll(".arr");
//     arrFields.forEach(function(item) {
//         const newItem = {
//             key: item.getAttribute("data-form"),
//             value: item.value
//         };
//         outP=document.createElement("p");
//         outP.innerHTML = `${newItem.key}: ${newItem.value}`;
//         outBlock.append(outP);
//     })
// }
// )


//Task5
// const circle = document.querySelectorAll(".circle");
// const dataAnimValue = item.getAttribute("data-anim");
// circle.forEach(function(item) {
//   item.classList.add(dataAnimValue);
// });
// circle.forEach(function(item) {
//   if (item.classList.contains(dataAnimValue)==true){
//     console.log(dataAnimValue);
//   }
// });

//Task6
// Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, відяких буде залежати ціна товару.

const btns = document.querySelector(".colors");
const colorBtns = btns.querySelectorAll("[color]");
const gradients = document.querySelector(".gradients");
const colorGradients = gradients.querySelectorAll("[color]");
const shoes = document.querySelector(".shoeBackground");
const colorShoes = shoes.querySelectorAll("[color]");
const dataPrice = document.querySelector("#outprice");

function toggleClass(event) {
    event.preventDefault();
    const clickedBtn = event.target;

    colorBtns.forEach(btn => {
        if (btn === clickedBtn) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    const clickedColor = clickedBtn.getAttribute("color");
    const clickedPrice = clickedBtn.getAttribute("data-price");

    colorGradients.forEach(gradient => {
        if (gradient.getAttribute("color") === clickedColor) {
            gradient.classList.add("second");
        } else {
            gradient.classList.remove("second");
        }
        if (gradient.getAttribute("data-price") >= clickedPrice) {
            dataPrice.innerHTML = gradient.getAttribute("data-price") - 0.01;
        } else {
            dataPrice.innerHTML = clickedPrice - 0.01;
        }
    });
    colorShoes.forEach(shoe => {
        if (shoe.getAttribute("color") === clickedColor) {
            shoe.classList.add("show");
        } else {
            shoe.classList.remove("show");
        }
    });


}

colorBtns.forEach(btn => {
    btn.addEventListener("click", toggleClass);
});

