// var, let and const
// let, const - blocked scoped {}
// var - function scoped or globally scoped

function start() {
    if (true) {
        var color = 'red'
    }
    console.log(color); // the var is being accessed out of the block but then if it is let or const it would have given error saying variable not defined
}
start();

// Also var when defined, it is attached to the window object, which we don't want
// Thats why let and const are commonly used 