let numbers = [3, 4, 10];

console.log(numbers);

function sumArray(numbers) {
    let total = 0;

    for (let n of numbers) {
        total = total + n;
    }
    return total;
}

let totalSum = sumArray(numbers);
console.log("Total sum:", totalSum);
