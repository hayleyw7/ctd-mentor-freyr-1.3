// You need to fork this repl.it and then will turn in the link in your browser as your homework assignment once you are done answering the following questions.

//TESTING you should be able to test your answers by clicking into Shell on the right and typing 'npm test'.

//DEBUGGING type console.log('any string here', varName) to console log values to see your answers before you run test.
// Each question below has an EXAMPLE of what would be returned if you invoke/call the function.  
// To invoke/call the function for debugging, simply console.log("testing out my function for Q#: ", functionName(anyInput)) and click the green Run button at the top of the screen.  
// You will then see the output of your called functions in the Console tab to the right of this screen.  
// Check to make sure that the output you get in your Console is the expected output.


// QUESTION 1. Write a standard function definition that takes 1 parameter (of data type number) and prints out the string "Happy Birthday!" to the console the same number of times as the parameter. (Each console message should be in a new line)

// EXAMPLE:
// console.log("testing out my function for Q1: ", happyBirthday(3));
//    should give you the following output in your console...
// Happy Birthday!
// Happy Birthday!
// Happy Birthday!

function happyBirthday(count) {
	for (let i = 0; i < count; i++) {
		console.log("Happy Birthday!");
	};
};

// QUESTION 2 (new). Write a standard function definition that takes 1 parameter. The parameter is a number and the function should return the sum of that number and all of the numbers greater than 0 below it. Example - if it was 3, it should add 3, to 1 + 2 because those are all of the numbers between 0 and 3.  Therefore it should return 6.

// EXAMPLE: 
// console.log("testing out my function for Q2: ", sum(4));
//    should give you the following output in your console...
// 10

function sum(num) {
	let sum = 0;

	for (let i = 1; i <= num; i++) {
		sum += i;
	};

	return sum;
};

//QUESTION 3 (new). Write a standard function definition that will remove vowels from a string using a loop that takes a parameter of type string and removes all of the vowels. Test it against the variable myString which is set to "elephant".

const myString = "elephant";

// EXAMPLE:
// console.log("testing out my function for Q3: ", removeVowels(myString));
// should give you the following output in your console...
// lphnt

function removeVowels(myString) {
	const letters = myString.split("");
	const vowels = ["a", "e", "i", "o", "u"];
	let newString = [];

	for (let i = 1; i < letters.length; i++) {
		if (!vowels.includes(letters[i])) {
			newString.push(letters[i]);
		};
	};

	return newString.join("");
};

// QUESTION 4 (new). Write a function definition that takes 1 parameter. The parameter is a number and the function should return the number of odd numbers between 0 and that number, including the number. (Remember the modulo operator)

// EXAMPLE:
// console.log("testing out my function for Q4: ", oddChecker(15));
// should give you the following output in your console...
// 8

const oddChecker = (num) => {
	let odds = [];

	for (let i = 1; i <= num; i++) {
		if (i % 2 !== 0) {
			odds.push(i);
		};
	};

	return odds.length;
};

// QUESTION 5. Write a function definition that takes 1 parameter. The parameter is a string and the function should return the number of vowels in the string. 

// EXAMPLE:
// console.log("testing out my function for Q5: ", vowelsChecker('I love to code.'));
// should give you the following output in your console...
// 6

const vowelsChecker = (string) => {
	const letters = string.toLowerCase().split("");
	const vowels = ["a", "e", "i", "o", "u"];
	let vowelCount = 0;

	for (let i = 0; i < letters.length; i++) {
		if (vowels.includes(letters[i])) {
			vowelCount += 1;
		};
	};

	return vowelCount;
};

// DO NOT EDIT BELOW THIS LINE

module.exports = {
	happyBirthday,
	sum,
	removeVowels,
	oddChecker,
	vowelsChecker,
}
