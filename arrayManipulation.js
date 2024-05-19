function processArray(numbers) {
    return numbers.map((num) => {
        if (num % 2 === 0) {
            // Even number: square it
            return num * num;
        } else {
            // Odd number: triple it
            return num * 3;
        }
    });
}

const inputNumbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(inputNumbers);
console.log(processedNumbers); // [3, 4, 9, 16, 15]