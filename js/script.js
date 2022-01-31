const start = 3;
const end = 12;
const result = [];

let chekNumber = start; // переназначил чисто, чтоб обойти твой конст из условия:)
const steps = end - start + 1;
let preResult = [];


for (let i = 0; i < steps; i = i + 1) {
    for (let index = 2; index <= chekNumber; index = index + 1) {
        if ((chekNumber % index) > 0) {
        } else if (chekNumber / index > 1) {
            break;
        } else {
            preResult[index - chekNumber] = index;// тут я не смог нормально вывести сразу в result (выходили пробелы между простыми) и пришлось делать костыль с преобразованием массива в строку, затем в число, затем пуш в result
            let strMassive = preResult.join('');
            result.push(+strMassive)
        }
    } //этот цикл проверяет, является ли заданное число простым (по сути может работать, как отдельная прога)
    chekNumber = chekNumber + 1;

} // этот цикл проверяет является ли каждое число простым из заданного диапазона

console.log(result)