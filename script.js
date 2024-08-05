
// 1.  Create a function that reverses an array. Start small here and work your way up. Begin with an array of 5 numbers, and then try your program with a larger array to verify its success.
function reverseArray(arr) {
    let reversedArr = []; 
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]); 
    }
    return reversedArr;
}
let smallArray = [1, 2, 3, 4, 5];
let reversedSmallArray = reverseArray(smallArray);

console.log(reversedSmallArray); 
let largeArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let reversedLargeArray = reverseArray(largeArray);

console.log(reversedLargeArray);



// 2. Write a JavaScript program to find the index of an array item in a for loop. 
function findIndexOfItem(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i; 
        }
    }
    return -1;
}

let array = [10, 20, 30, 40, 50];
let itemToFind = 30;
let index = findIndexOfItem(array, itemToFind);
console.log("Index of item:", index);


// 3.  Return the number of vowels in a string. Create a function that’ll return an integer of the number of vowels found in a string. This is a great way to practice determining the features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared to determine what datasets (or just strings) consist of.  
function countVowels(str) {
    str = str.toLowerCase();
    const vowels = 'aeiou';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++; 
        }
    }
    
    return count; 
}
console.log(countVowels('hello'));
console.log(countVowels('javascript')); 
console.log(countVowels('rhythm'));
console.log(countVowels('AEIOU'));
console.log(countVowels('OpenAI')); 



// 4. Check if a string is a palindrome. A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward (like the words “kayak,” “mom,” “radar,” and “refer”). Create a function that takes a string as input and returns a Boolean indicating whether the string is a palindrome. Test your function with different strings to ensure it works correctly. 
function isPalindrome(str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9]/gi, '');
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
console.log(isPalindrome('kayak')); 
console.log(isPalindrome('racecar')); 
console.log(isPalindrome('hello')); 
console.log(isPalindrome('A man, a plan, a canal, Panama')); 
console.log(isPalindrome('No lemon, no melon'));




//5. Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above. 
function repeatLastThreeChars(originalString) {

    if (originalString.length < 3) {
        throw new Error('String length must be 3 or more characters');
    }

    const lastThreeChars = originalString.slice(-3);

    const updatedString = lastThreeChars.repeat(4);

    return updatedString;
}
console.log(repeatLastThreeChars('JavaScript')); 
console.log(repeatLastThreeChars('Hello'));
console.log(repeatLastThreeChars('abc'));
console.log(repeatLastThreeChars('123456789')); 