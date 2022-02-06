// Problem: convert string "How can mirrors be real if our eyes aren't real" to
// "How Can Mirrors Be Real If Our Eyes Aren't Real"

function showCase(str) {
    const arr = str.split(' '); //converting string to array, so we can index every word
    const arr2 = []; // empty array for future converted words

    for (let index = 0; index < arr.length; index = index + 1) {
        let word = arr[index][0].toUpperCase() + arr[index].slice(1); //converting word's first letter to upper case and adding rest of word with slice;
        arr2[index] = word; // puting converted words into new array
    };

    let result = arr2.join(' '); // converting new array into string
    console.log(result);
}
showCase('lol kek cheburek')