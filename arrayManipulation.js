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




function formatArrayStrings(strings, processedNumbers) {
    return strings.map((str, index) => {
        if (processedNumbers[index] % 2 === 0) {
            // Even number: capitalize the string
            return str.toUpperCase();
        } else {
            // Odd number: convert the string to lowercase
            return str.toLowerCase();
        }
    });
}

const inputStrings = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig'];
const formattedStrings = formatArrayStrings(inputStrings, processedNumbers);
console.log(formattedStrings); // ["APPLE", "banana", "CHERRY", "date", "fig"]



// userInfo.js

// Example input arrays
const originalNames = ['Alice', 'Bob', 'Charlie'];
const modifiedNames = ['ALICE', 'bob', 'CHARLIE'];

// Function to create user profiles
function createUserProfiles(originalNames, modifiedNames) {
    const userProfiles = [];
    for (let i = 0; i < originalNames.length; i++) {
        const userProfile = {
            originalName: originalNames[i],
            modifiedName: modifiedNames[i],
            id: i + 1, // Auto-incremented ID
        };
        userProfiles.push(userProfile);
    }
    return userProfiles;
}

// Example usage
const profiles = createUserProfiles(originalNames, modifiedNames);
console.log(profiles);

