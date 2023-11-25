"use strict";
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"
// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapYear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false
// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo
// PART 1 
const twoFer = (name = 'you') => {
    return `One for ${name}, one for me`;
};
console.log(twoFer());
console.log(twoFer('Elton'));
// PART 2
const isLeapYear = (year) => {
    let isLeap = false;
    if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
        isLeap = true;
    }
    return isLeap;
};
console.log(isLeapYear(2000));
console.log(isLeapYear(2001));
console.log(isLeapYear(2002));
console.log(isLeapYear(2003));
console.log(isLeapYear(2004));
