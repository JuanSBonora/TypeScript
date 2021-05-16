const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number,string];
} = {
    name: 'JuanSbonora',
    age: 30,
    hobbies: ['Sports','Cooking'],
    role: [2, 'admin']
};

let favoriteActivities: string [];
favoriteActivities = ['Karate'];

console.log(person, favoriteActivities);

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
