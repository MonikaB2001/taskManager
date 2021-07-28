//promise----
const add = (x, y) => {
    return new Promise(function (resolve, reject) {
        if (typeof (x) != 'number' || typeof (y) != 'number') {
            reject("Both should be a number");
        }
        setTimeout(function () {
            resolve(x + y);
        }, 4000)
    })
}

add(5, 5).then(function (result) {
    console.log(result);
}).catch(function (err) {
    console.log(err);
})

//promise chaining----
const add = (x, y) => {
    return new Promise(function (resolve, reject) {
        if (typeof (x) != 'number' || typeof (y) != 'number') {
            reject("Both should be a number");
        }
        setTimeout(function () {
            resolve(x + y);
        }, 4000)
    })
}
const sub = (x, y) => {
    return new Promise(function (resolve, reject) {
        if (typeof (x) != 'number' || typeof (y) != 'number') {
            reject("Both should be a number");
        }
        setTimeout(function () {
            resolve(x - y);
        }, 4000)
    })
}
const multi = (x, y) => {
    return new Promise(function (resolve, reject) {
        if (typeof (x) != 'number' || typeof (y) != 'number') {
            reject("Both should be a number");
        }
        setTimeout(function () {
            resolve(x * y);
        }, 4000)
    })
}
const div = (x, y) => {
    return new Promise(function (resolve, reject) {
        if (typeof (x) != 'number' || typeof (y) != 'number') {
            reject("Both should be a number");
        }
        setTimeout(function () {
            resolve(x / y);
        }, 4000)
    })
}

add(5, 5).then(function (addRes) {
    return sub(addRes, 8);
}).then(function (subRes) {
    return multi(subRes, 1);
}).then(function (multiRes) {
    return div(multiRes, 4);
}).then(function (divRes) {
    console.log(divRes);
}).catch(function (err) {
    console.log(err);
})