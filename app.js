var u1 = { name: 'Max', age: 30 };
function greet(user) {
    return ('Hi my name is ' + user.name);
}
function isOlder(user, checkAge) {
    if (checkAge > user.age) {
        console.log('is Older');
    }
    else {
        console.log('is Young');
    }
    return checkAge > user.age;
}
var r1 = greet(u1);
console.log(r1);
var r2 = isOlder(u1, 15);
console.log(r2);
