/*const ADMIN = 0;
const READ_ONLY = 1;
const author = 2;
*/
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'JuanSbonora',
    age: 30,
    hobbies: ['Sports','Cooking'],
    role: Role.ADMIN
};
console.log(person);

if(person.role === Role.ADMIN){
    console.log('is Admin');
}