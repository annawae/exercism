// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
let arr1 = Number(array1.join(""));
let arr2 = Number(array2.join(""));
 
return arr1 + arr2;
  
 
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
   const testArray = value.toString().split("");
  const reversed = testArray.reverse();
   if(reversed.join("") == value){
    return true;
   }
   else return false;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(!input){
    return "Required field";
  }
  else if(Number(input) === 0 || !Number(input)){
    return "Must be a number besides 0";
  }
  else
    return "";
}
