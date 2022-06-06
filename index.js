// 1. Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th. Go to the editor
// Test Data :
console.log('----------- 1 ------------');
console.log(humanize(1));
console.log(humanize(20));
console.log(humanize(3));
console.log(humanize(302));
// "1st"
// "20th"
// "302nd"

function humanize(number) {
  if (number % 100 >= 11 || number % 100 > 14) {
    return `${number}th`;
  }
  switch (number % 10) {
    case 1:
      return `${number}st`;
    case 2:
      return `${number}nd`;
    case 3:
      return `${number}rd`;
    default:
      break;
  }
  return `${number}th`;
}

// 2. Write a JavaScript function to get unique guid (an acronym for 'Globally Unique Identifier?) of the specified length, or 32 by default
// Test Data :
console.log('----------- 2 ------------');
console.log(guid());
console.log(guid(15));
// "hRYilcoV7ajokxsYFl1dba41AyE0rUQR"
// "b7pwBqrZwqaDrex"

function guid(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  length ? length : (length = 32);
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

// 3. Write a JavaScript function to get the successor of a string.
// Note: The successor is calculated by incrementing characters starting from the rightmost alphanumeric (or the rightmost character if there are no alphanumerics) in the string. Incrementing a digit always results in another digit, and incrementing a letter results in another letter of the same case. If the increment generates a carry, the character to the left of it is incremented. This process repeats until there is no carry, adding an additional character if necessary.

console.log('----------- 3 ------------');
console.log(successor("abcd")); // "abce"
console.log(successor("THX1138")); // "THX1139"
console.log(successor("<>")); // "<>"
console.log(successor("1999zzz")); // "2000aaa"
console.log(successor("ZZZ9999")); // "AAAA0000"

function successor(str) {
  if (str.charAt(str.length - 1).match(/[a-z]|[0-9]/i) === null)
    // if not digit or letter
    return str;
  var lastCharCode = str.charCodeAt(str.length - 1) + 1; // increment last character

  if (lastCharCode == 123 || lastCharCode == 91 || lastCharCode == 58) {
    var newStr = str.slice(0, str.length - 1);
    lastCharCode == 58 ? (lastCharCode -= 10) : (lastCharCode -= 26); // go back 26 if its Z or z, 10 if 0
    var lastChar = String.fromCharCode(lastCharCode);

    return newStr.length > 0
      ? successor(newStr) + lastChar
      : lastChar == "0"
      ? "1" + lastChar
      : lastChar + lastChar;
  }
  // in case of first number is 9 : add 1 in first position
  return str.slice(0, str.length - 1) + String.fromCharCode(lastCharCode);
}

// 4. Given an array with numbers, write a program that efficiently answers queries of the form: “Which is the nearest larger value for the number at position i?”, where distance is the difference in array indices. For example in the array [1,4,3,2,5,7], the nearest larger value for 4 is 5. After linear time preprocessing you should be able to answer queries in constant time.'

var initalArr = [2, 42, 182, 222, 162, 202, 242, 282, 322, 362];

function nearestLargerNum(param) {
  let selectedNum = initalArr[param];
  let leftLargerNum, rightLargerNum, result;
  for (let i = param - 1; i >= 0; i--) {
    if (initalArr[i] > selectedNum) {
      leftLargerNum = initalArr[i];
      break;
    }
  }
  for (let i = param + 1; i < initalArr.length; i++) {
    if (initalArr[i] > selectedNum) {
      rightLargerNum = initalArr[i];
      break;
    }
  }
  
  if (leftLargerNum != undefined && rightLargerNum != undefined) {
    result = leftLargerNum > rightLargerNum ? rightLargerNum : leftLargerNum;
  } else if (leftLargerNum != undefined) {
    result = leftLargerNum;
  } else if (rightLargerNum != undefined) {
    result = rightLargerNum;
  }
  return result;
}
console.log('----------- 4 ------------');
console.log(nearestLargerNum(0));

// 5. Write a program that outputs all possibilities to put + or - or nothing between the numbers 1,2,…,9 (in this order) such that the result is 100. For example 1 + 2 + 3 - 4 + 5 + 6 + 78 + 9 = 100.

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var target = 100;
var combinations = Math.pow(3, numbers.length - 1);

var solutions = [];
// o stands for operands
var o = { 0: "", 1: "-", 2: "+" };
var i;

for (i = 0; i <= combinations; i++) {
  var tmp = i.toString(3); // translates the index in base 3

  var p = ("00000000" + tmp)
    .substr(-8, 8)
    .split("")
    .map(function (v) {
      return parseInt(v);
    });

  var temp = "1" + o[p[0]] + "2" + o[p[1]] + "3" + o[p[2]] + "4" + o[p[3]] + "5" + o[p[4]] + "6" + o[p[5]] + "7" + o[p[6]] + "8" + o[p[7]] + "9";

  if (eval(temp) === 100) {
    solutions.push(temp);
  }
}
console.log('----------- 5 ------------');
console.log(solutions);
