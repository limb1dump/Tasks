// Problem: reverse string 'anton'



const name = 'anton';

let steps = name.length;
let reverse;
let result = '';

for (let index = 0; index < steps; index = index + 1) {
    reverse = name.slice(steps - index - 1, steps - index);
    result = result + reverse;
}

console.log(result);