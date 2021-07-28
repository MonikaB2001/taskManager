//call back---
const add = (x, y, cb) => {
    setTimeout(() => {
        cb(x + y);
    }, 3000)
}

add(4,6,function(result) {
    console.log(result);
})


//call back chaining---
const add = (x, y, cb) => {
    setTimeout(() => {
        cb(x + y);
    }, 3000)
}
const sub = (x, y, cb) => {
    setTimeout(() => {
        cb(x - y);
    }, 3000)
}
const multi = (x, y, cb) => {
    setTimeout(() => {
        cb(x * y);
    }, 3000)
}
const div = (x, y, cb) => {
    setTimeout(() => {
        cb(x / y);
    }, 3000)
}

add(4, 4, function (result1) {
    console.log(result1);
    sub(result1, 5, function (result2) {
        console.log(result2);
        multi(result2, 2, function (result3) {
            console.log(result3);
            div(result3, 2, function (result4) {
                console.log(result4);
            })
        })
    })
})


//error first call back---
const add = (a, b, cb) => {
    if (typeof (a) != 'number' || typeof (b) != 'number') {
        cb("value should be a number", undefined);
        return;
    }
    setTimeout(() => {
        cb(undefined, a + b);
    }, 3000)
}

const sub = (a, b, cb) => {
    if (typeof (a) != 'number' || typeof (b) != 'number') {
        cb("value should be a number", undefined);
        return;
    }
    setTimeout(() => {
        cb(undefined, a - b);
    }, 3000)
}

add(3, 8, function (err, result) {
    if (err) {
        console.log("Error Add", err);
        return;
    }
    console.log("Add", result);

    sub(8, 6, function (err, result2) {
        if (err) {
            console.log("Error Sub", err);
            return;
        }
        console.log("Sub Result", result2);
    })
})