// Work through the following problems in Javascript (you have seen these problems before). Create a new file for your code. When you have finished with each function, leave a code comment with what you believe the runtime of your code to be.

// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

// For example:

// addToZero([]);
// // -> False

// addToZero([1]);
// // -> False

// addToZero([1, 2, 3]);
// // -> False

// addToZero([1, 2, 3, -2]);
// // -> True


function addToZero(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true
            }
        }
    }
    return false
}

console.log(addToZero([]))
console.log(addToZero([1]))
console.log(addToZero([1, 2]))
console.log(addToZero([1, 2, 3, -2]))

//runtime: O(n^2) 
//spacetime: O(1)

console.log('=================================')

// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

// For example:

// hasUniqueChars("Monday");
// // -> True

// hasUniqueChars("Moonday");
// // -> False


function hasUniqueChars(str) {
    set = new Set(str)
    str = str.split('')
    let arr = Array.from(set)
    if (str.length === arr.length) {
        return `true, has no repeating characters`
    } else { return `false, has repeating characters`}
}

console.log(hasUniqueChars('moooondat'))
console.log(hasUniqueChars('hi'))
console.log(hasUniqueChars('the'))

//runtime: O(1)
//spacetime: O(1)

console.log('=================================')


// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

// For example:

// isPangram("The quick brown fox jumps over the lazy dog!");
// // -> True

// isPangram("I like cats, but not mice");
// // -> False

function isPangram(str) {

    str = str.toLowerCase()
    set = new Set(str) //creating a set to get rid of any additional characters as to not mess up the later part of the function
    let arr = Array.from(set) //creating an array to more easily access values and do what I want with it.
    arr = arr.sort() //sorting in order so I can compare it with the alphabet.
    arr = arr.reverse() //reversing the array, because numbers and sepcial characters sort before letters, so doing the reverses allows me to compare the correct values together. 

    let count = 0
    
    let alphabet =  [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
    for (i = 0; i < 26; i++) {
        if (alphabet[i] === arr[25 - i]) {
            count = count + 1 
        } 
    }

    if (count === 26) {
        return true
    } else {
        return false
    }
}

console.log(isPangram('hi the world'))
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))

//runtime: O(n)
//spacetime: O(1)

console.log('=================================')



// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// For example:

// findLongestWord(["hi", "hello"]);
// // -> 5


function longestWord(arr) {
    biggestword = 0
    for (i = 0; i < arr.length; i++) {
       if (arr[i].length > biggestword) {
        biggestword = arr[i].length
       } 
    }

    return biggestword
}

console.log(longestWord(["hello", "awesome"]))
console.log(longestWord(["pneumonoultramicroscopicsilicovolcanoconiosis", "tornado", "awesome", "hello"]))

//runtime:O(n)
//spacetime: O(1)






// Extra Credit
// List out the space complexity of each solution in Step 2.

// Be sure to push your code to Github for this assignment!


