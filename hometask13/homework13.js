//Task1
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//     const ajaxRequest = new XMLHttpRequest();
//     ajaxRequest.open('GET', 'data.json', true);
//     ajaxRequest.onreadystatechange = function () {
//         if (ajaxRequest.readyState === XMLHttpRequest.DONE) {
//             if (ajaxRequest.status === 200) {
//                 const response = JSON.parse(ajaxRequest.responseText);
//                 const currentDate = new Date();
//                 const buttonText = "Your vote is accepted: " + currentDate.toLocaleString();
//                 button.innerText = buttonText;
//                 alert(response.message);
//             } else {
//                 alert('Error ' + ajaxRequest.status + ': ' + ajaxRequest.statusText);
//             }
//         }
//     }
//     ajaxRequest.send();
// });

//Task2
// const button = document.querySelector("button");
// const list = document.querySelector("ul");
// button.addEventListener("click", function () {
//         const ajaxRequest = new XMLHttpRequest();
//         ajaxRequest.open('GET', 'books.json', true);
//         ajaxRequest.onreadystatechange = function () { 
//             if (ajaxRequest.readyState != 4) return; 
//             if (ajaxRequest.status === 200) {
//                 const response = JSON.parse(ajaxRequest.responseText);
//                 renderAuthors(response.authors);
//          } else { alert(ajaxRequest.responseText); }
//         }
//         ajaxRequest.send();
// });

// function renderAuthors(authors) {
//     list.innerHTML = ""; 

//     authors.forEach(function (author) {
//         const li = document.createElement("li");
//         li.textContent = author;
//         authorsList.appendChild(li);
//     });
// };

//Task3

(async () => {
    const list = document.querySelector(".list");
    let response = await fetch("https://randomuser.me/api/?results=1");
    let data = await response.json();
    const users = data.results;
    console.log(data);
    users.map((item) => {
        const { picture, name, dob, location, login, email }= item;
        const userCard = document.createElement("div");
        list.append(userCard);

        userCard.innerHTML = `
        <img src="${picture.medium}" alt="${name.last}">
        <p><strong>${name.first} ${name.last}</strong></p>
        <p> ${dob.age}</p>
        <p> ${location.country}</p>
        <p> ${login.username}</p>
        <p> ${login.password}</p>
        <p> ${email}</p>`;
    });
})()
