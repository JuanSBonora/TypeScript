const person = {
    name: 'JuanSbonora',
    age: 30,
    hobbies: ['Sports','Cooking']
};

let favoriteActivities: string [];
favoriteActivities = ['Sports'];

console.log(person.name);

for (let hobbies of person.hobbies) {
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
