// Problem: convert string "How can mirrors be real if our eyes aren't real" to
// "How Can Mirrors Be Real If Our Eyes Aren't Real"


const jadenString = "How can mirrors be real if our eyes aren't real";

let jadenArray = jadenString.split(' ') // converting string into array

let upperCaseJadenArray = jadenArray.map(function (item, index, array) {
    return item[0].toUpperCase() + item.slice(1, item.length);
}) // creating new array and capitalize all first letters 

let upperCaseJadenString = upperCaseJadenArray.join(' ') // converting array back to string

console.log(upperCaseJadenString)