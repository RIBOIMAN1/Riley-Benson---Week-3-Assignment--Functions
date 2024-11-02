// 1. Write a function min that takes two numbers and returns the smallest one of the pair.
// Examples:
// console.log(min(0, 10)); // will output 0.
// console.log(min(0, -10)); // will output -10
function min(a, b) {
    return a < b ? a : b;
}
console.log(min(9, 27)); // Outputs 9

// 2. Write a function that takes the radius of a circle and outputs it’s approximate circumference (the formula for circumference is 2 *pi * radius, you may use 3.14 for pi).
// Example Output:
// console.log(calculateCircumference(5)); // will output 31.4
function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
}
let radius = 7;
let circumference = calculateCircumference(radius);
console.log("The circumference of the circle is: " + circumference); // Calculates circumference of circle when the radius = 7

// 3. Write a function searchString that takes a character and then returns how many times it appears in another string argument.
// Example Output:
// console.log(searchString(“s”, “mississippi”)); // will output 4
// console.log(searchString(“q”, “mississippi”)); // will output 0

function searchString(character, string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === character) {
            count++;
        }
    }
    return count;
}
let char = 'a';
let str = '"Karaoke" uses the first of 26 letters in the word 2 times';
let occurrences = searchString(char, str);
console.log("'" + char + "' appears " + occurrences + " times throughout the string.");