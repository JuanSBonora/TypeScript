/*type Combinable = number|string;
type ConversionDescriptor = 'as-number'|'as-text';

function combine(
    input1:Combinable, 
    input2:Combinable,
    resultConversion:ConversionDescriptor )
{
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2;
    }else{
        result = input1.toString() + input2.toString();
    } 
    return result;
}

const combineAges = combine(15,10,'as-number');
console.log(combineAges);

const combinedStringAges = combine('15','10','as-number');
console.log(combinedStringAges)

const combineNames = combine('Max','Ana','as-text');
console.log(combineNames);*/
type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; 
 
function greet(user:User) {
    return ('Hi my name is ' + user.name)
}
 
function isOlder(user:User, checkAge: number){
    if(checkAge > user.age){
        console.log('is Older');
    }else{
        console.log('is Young');
    }
    return checkAge > user.age;
}
 
const r1 = greet(u1);
console.log(r1);
 
const r2 = isOlder(u1,15);
console.log(r2)
