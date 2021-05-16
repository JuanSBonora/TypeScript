var person = {
    name: 'JuanSbonora',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'admin']
};
var favoriteActivities;
favoriteActivities = ['Karate'];
console.log(person, favoriteActivities);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobbies = _a[_i];
    console.log(hobbies.toUpperCase());
}
/*const product = {
    id: '001',
    price: 7.0,
    tags: ['great-offter','hot-and-new'],
    details:{
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
}
console.log(person,product)*/
