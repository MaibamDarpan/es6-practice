// function(num){
//     return num *2;
// }

// const doubleIt = function myfun(num){
//     return num * 2;
// }

const doubleIt = num => num * 2;

const add = (x, y) => x+y;
const sum = add(39,50);
console.log(sum);
const give10 = () => 10;

const number = give10();
console.log(number);

const result = doubleIt(8);
console.log(result);

const doMath = (a, b) => {
    const sum = a + b;
    const diff = a - b;
    const result = sum * diff;
    return result;
}

const newResult = doMath(27, 12);
console.log(newResult);