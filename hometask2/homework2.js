//Task1
let a;
let b;
let c;
console.log(parseInt(a)<parseInt(b)<parseInt(c));

//Task2 
let x = 1;
let y = 2;

let res1 = String(x)+String(y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = Boolean(x)+String(y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = x<y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = parseInt("x+y");// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""

//Task3
const isAdult = prompt("Enter your age","Number");
(+isAdult>=18)? console.log("Ви досягли повнолітнього віку"):console.log("Ви ще надто молоді");

//Task4
function arrayDouble(arr){
let doubleNumber=0;
let maxNumber=0;
for (let i=0; i<arr.length; i++) {
  let count=0;
 for (let j=0; j<arr.length; j++) {
    if (arr[j]===arr[i]) {
      count++;
    }
  }
  if (count>maxNumber) {
    maxNumber=count;
    doubleNumber=arr[i];
  }
}
return arr.filter(item=>item!==doubleNumber);
};



//Task5

let sideA=prompt("Введіть довжину 1 сторони трикутника");
let sideB=prompt("Введіть довжину 2 сторони трикутника");
let sideC=prompt("Введіть довжину 3 сторони трикутника");
let result=0;
if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
  console.log("Введене невірне значення однієї із сторін");
} else {
sideA=Number(sideA);
sideB=Number(sideB);
sideC=Number(sideC);
result = parseFloat(Math.sqrt((sideA+sideB+sideC)*(-sideA+sideB+sideC)*(sideA-sideB+sideC)*(sideA+sideB-sideC)) / 4).toFixed(3);
console.log(result);

(Math.pow(sideA, 2)+Math.pow(sideB, 2)===Math.pow(sideC, 2) || Math.pow(sideA, 2)+Math.pow(sideC, 2)===Math.pow(sideB, 2) || Math.pow(sideC, 2)+Math.pow(sideB, 2)===Math.pow(sideA, 2))? console.log("Трикутник прямокутний"):console.log("Трикутник не прямокутний");
  
}
//Task6
  function calc(a, b, op){
  if (op===1){
    return a-b;
  } else if (op===2){
    return a*b;
  } else if (op===3){
    return a/b;
  } else {
    return a+b;
  };
  };


//Task7

function findUnique(arr){
  let maxNumber=0;
  for (let i=0; i<arr.length; i++) {
    let count=0;
   for (let j=0; j<arr.length; j++) {
      if (arr[j]===arr[i]) {
        count++;
      }
    }
    if (count>maxNumber) {
      maxNumber=count;
    }
  }
  return maxNumber===1;
};
console.log(findUnique([1, 11, 3, 7, 6]));

//Task8

function create(str){
   return function(anotherStr){
     return str===anotherStr;
   }
};
const tom = create("pass_for_Tom");
console.log(tom("pass_for"));