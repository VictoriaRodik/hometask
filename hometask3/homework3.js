
//Task1
function compact(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] === arr[i]) {
        arr.splice(j, 1);
      }
    }
  }
  return arr2 = arr;
};
console.log(compact([5, 3, 4, 5, 6, 7, 3, 4]));


// Task2
function createArray(start, end) {
  let arr = [];
  for (i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(createArray(2, 9));

//Task3
function numbers(a, b) {
  for (i = a; i <= b; i++) {
    for (j = a - 1; j < i; j++) {
      console.log(i);
    }
  }
}
numbers(1, 3);


//Task4
function randArray(k) {
  let arr = [];
  for (i = 0; i < k; i++) {
    arr.push(Math.floor(Math.random() * (499)) + 1);
  }
  return arr;
}
console.log(randArray(5));


//Task5
function arrNew(arr) {
  let arrNumbers = [];
  let arrStr = [];
  arr = arr.flat();
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      arrNumbers.push(arr[i]);
    }
  }
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      arrStr.push(arr[i]);
    }
  }
  return new Array(arrNumbers, arrStr);
}
console.log(arrNew([5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"]));

//Task8
function hello() {
  let now = new Date();
  let currentHour = now.getHours();
  if (currentHour >= 23 && currentHour < 5) {
    console.log("Доброї ночі");
  } else if (currentHour >= 5 && currentHour < 11) {
    console.log("Доброго ранку");
  } else if (currentHour >= 11 && currentHour < 17) {
    console.log("Доброго дня");
  } else {
    console.log("Доброго вечора");
  };
}

function helloMore() {
  let now = new Date();
  let currentHour = now.getHours();
  (currentHour >= 23 && currentHour < 5) ? console.log("Доброї ночі") :
    (currentHour >= 5 && currentHour < 11) ? console.log("Доброго ранку") :
      (currentHour >= 11 && currentHour < 17) ? console.log("Доброго дня") :
        console.log("Доброго вечора");
}

