const person = {name: 'Amir Khan', age: 39, address: 'Mumbai', works: 'Movie', phone: 01712919099};
const {works, name,price, address} = person;
console.log(works, name,price, address);



const friends = ['SHahrukh Khan', 'Salman Khan', 'Shakib Khan', 'Zerin Khan'];
const [first, second, ...last] = friends;

console.log(last);