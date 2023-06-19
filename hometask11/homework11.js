//Task1
function getPromise(message, delay) {
    return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(message), delay);
});
}
getPromise("test promise", 200).then((data)=> {
    console.log(data);       
})

//Task2
function calcArrProduct(arr) {
    return new Promise(function(resolve, reject){
        let product = arr.reduce(function (acc, item) {
            if (typeof item === "number") {
                return acc * item;
            }
            reject("Error! Incorrect array!");
        });
        resolve(product);
    })
 }

 calcArrProduct([3,4,5]).then(result => console.log(result));
 calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));

// Task3
new Promise(function (resolve, reject) {
    let number = prompt("Enter a number");
    if (!isNaN(number)) {
        resolve(number)
    } else {
        reject(new Error("Not a number"));
    }
}).catch(function (error) {
    return new Promise(function (resolve, reject) {
        function correctNumber() {
            let number = prompt("Enter a number");
            if (!isNaN(number)) {
                resolve(number);
            } else {
                correctNumber();
            }
        };
        correctNumber();
    });
}).then(function (result) {
    console.log(result);
});

//Task4
// const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
// //Your code. You can use array delays, do not create it
// function showNumbers(delays) {
//   for (let i = 0; i < delays.length; i++) {
//     setTimeout(function() { console.log(i) }, delays[i]);
//   }
// }
// showNumbers(delays);

//Task5
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
//Your code. You can use array delays, do not create it
async function showNumbers(delays) {
  for (let i = 0; i < delays.length; i++) {
    let result = await delay(i, delays[i]);
    console.log(result);
  }
}
showNumbers(delays);