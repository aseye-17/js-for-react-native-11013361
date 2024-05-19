function processArray(numbers) {
    return numbers.map((num) => {
        if (num % 2 === 0) {
            return num * num;
        } else {
            return num * 3;
        }
    });
}

const inputNumbers = [5, 10, 15, 20];
const processedNumbers = processArray(inputNumbers);
console.log(processedNumbers); 




function formatArrayStrings(strings, processedNumbers) {
    return strings.map((str, index) => {
        if (processedNumbers[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

const inputStrings = ['Boston', 'London', 'Accra', 'Cairo'];
const formattedStrings = formatArrayStrings(inputStrings, processedNumbers);
console.log(formattedStrings); 




