// Problem: reverse given array 




const source = [
    1, 2, 3, 4, 5, 54, 84, 4885, 0
];

const result = [];

let steps = source.length;

function reverseMassive() {
    for (let index = 0; index < steps; index = index + 1) {
        result.push(source[steps - index - 1]);
    }
    console.log(result)
}

reverseMassive()