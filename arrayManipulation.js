function processArray(array) {
    let result = [];
    for (let num of array) {
        if (num % 2 === 0) {
            result.push(num * num);
        } else {
            result.push(num * 3);
        }
    }
    return result;
}

function main() {
    let inputArray = [];
    let input = parseInt(prompt("Enter integers separated by spaces, and type -1 to stop:"));

    while (input!== -1) {
        inputArray.push(input);
        input = parseInt(prompt("Enter integers separated by spaces, and type -1 to stop:"));
    }

    let processedArray = processArray(inputArray);

    for (let value of processedArray) {
        console.log(value + " ");
    }
}

main();




function processArray(array) {
    let result = [];
    for (let num of array) {
        if (num % 2 === 0) {
            result.push(num * num);
        } else {
            result.push(num * 3);
        }
    }
    return result;
}

function main() {
    let inputArray = [];
    let input = parseInt(prompt("Enter integers separated by spaces, and type -1 to stop:"));

    while (input!== -1) {
        inputArray.push(input);
        input = parseInt(prompt("Enter integers separated by spaces, and type -1 to stop:"));
    }

    let processedArray = processArray(inputArray);

    for (let value of processedArray) {
        console.log(value + " ");
    }
}

main(); 




