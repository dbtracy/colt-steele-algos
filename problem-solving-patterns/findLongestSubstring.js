// Write a function called findLongestSubstring which accepts a string and
// returns the length of the longest substring with all distinct
// characters.

// Examples
// findLongestSubstring('') --> 0
// findLongestSubstring('rithmschool') --> 7
// findLongestSubstring('thisisawesome') --> 6
// findLongestSubstring('thecatinthehat')
// findLongestSubstring('bbbbbb')
// findLongestSubstring('longestsubstring')
// findLongestSubstring('thisishowwedoit')

function findLongestSubstring(string) {

}

// APPROACH:
// two pointers
// hash table
// maxLength variable
// increase right pointer, and as long as hash doesn't have char, load
// char into hash
// increase maxLength as you go (if length > maxLength)
// when hash DOES have the char, increment left pointer
// remove each char from hash as you go
// once you have removed the repeat char that right is on, start increasing
// right again








// console.log(findLongestSubstring(''))
// console.log(findLongestSubstring('rithmschool'))
// console.log(findLongestSubstring('thisisawesome'))
// console.log(findLongestSubstring('thecatinthehat'))
// console.log(findLongestSubstring('bbbbbb'))
// console.log(findLongestSubstring('longestsubstring'))
// console.log(findLongestSubstring('thisishowwedoit'))
