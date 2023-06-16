//Task1
let { first: f = "Name №1", second: s = "Name №2", third: t = "Name №3" } = names;

//Task2
let { names: [name1, name2, name3], ages: [age1, age2, age3] } = data;
//Task3
function mul(...rest) {
    let result = 0;
    result = rest.reduce(function (acc, item) {
        if (typeof item === "number") {
            return acc * item;
        }
        return acc;
    });

    if (typeof result === "number") {
        return result;
    }
    return 0;
}
//Task4
let server = {
    data: 0,
    convertToString: function (callback) {
        callback(() => this.data + "");
    }
};

let client = {
    server: server,
    result: "",
    calc: function (data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },
    notification: function () {
        return (callback) => { this.result = callback(); };
    }
};
//Task5
var arr = [];
for (var i = 0; i <= 2; i++) {
    arr[i] = func(i);
}
function func(val) {
    return consol.log(val);
}

//Task6

function mapBuilder(arr1, arr2) {
    const map = new Map();
    for (let i = 0; i < arr1.length; i++) {
        map.set(arr1[i], arr2[i]);
    }
    return map;
};
let map = mapBuilder([1, 2, 3, 4], ["div", "span", "b", "i"]);
console.log(map.get(2));
console.log(map.size);