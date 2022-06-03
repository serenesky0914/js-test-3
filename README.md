# js-test-3

```
1. Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th. Go to the editor
Test Data :
console.log(humanize(1));
console.log(humanize(20));
console.log(humanize(302));
"1st"
"20th"
"302nd"

2. Write a JavaScript function to get unique guid (an acronym for 'Globally Unique Identifier?) of the specified length, or 32 by default
Test Data :
console.log(guid());
console.log(guid(15));
"hRYilcoV7ajokxsYFl1dba41AyE0rUQR"
"b7pwBqrZwqaDrex"

3. Write a JavaScript function to get the successor of a string.

Note: The successor is calculated by incrementing characters starting from the rightmost alphanumeric (or the rightmost character if there are no alphanumerics) in the string. Incrementing a digit always results in another digit, and incrementing a letter results in another letter of the same case. If the increment generates a carry, the character to the left of it is incremented. This process repeats until there is no carry, adding an additional character if necessary.
Example :
string.successor("abcd") == "abce"
string.successor("THX1138") == "THX1139"
string.successor("< >") == "< >"
string.successor("1999zzz") == "2000aaa"
string.successor("ZZZ9999") == "AAAA0000"

Test Data :
console.log(successor('abcd'));
console.log(successor('3456'));
"abce"
"3457"

4. Given an array with numbers, write a program that efficiently answers queries of the form: “Which is the nearest larger value for the number at position i?”, where distance is the difference in array indices. For example in the array [1,4,3,2,5,7], the nearest larger value for 4 is 5. After linear time preprocessing you should be able to answer queries in constant time.

5. Write a program that outputs all possibilities to put + or - or nothing between the numbers 1,2,…,9 (in this order) such that the result is 100. For example 1 + 2 + 3 - 4 + 5 + 6 + 78 + 9 = 100.
```
