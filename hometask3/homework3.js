
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
    let item = Math.floor(Math.random() * (499)) + 1;
    arr.push(item);
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
  return [arrNumbers, arrStr];
}
console.log(arrNew([5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"]));

//Task8
function greeting() {
  const now = new Date();
  const currentHour = now.getHours();
  const greetings = ["Доброї ночі", "Доброго ранку", "Доброго дня", "Доброго вечора"]
  if (currentHour >= 23 && currentHour < 5) {
    console.log(greetings[0]);
  } else if (currentHour >= 5) {
    console.log(greetings[1]);
  } else if (currentHour >= 11) {
    console.log(greetings[2]);
  } else if (currentHour >= 17) {
    console.log(greetings[3]);
  };
}

function greetingOnceMore() {
  const now = new Date();
  const currentHour = now.getHours();
  const greetings = ["Доброї ночі", "Доброго ранку", "Доброго дня", "Доброго вечора"]
  switch (true) {
    case currentHour >= 23 && currentHour < 5:
      console.log(greetings[0]);
      break;
    case currentHour >= 5 && currentHour < 11:
      console.log(greetings[1]);
      break;
    case currentHour >= 11 && currentHour < 17:
      console.log(greetings[2]);
      break;
    case currentHour >= 17:
      console.log(greetings[3]);
      break;
  }
}


