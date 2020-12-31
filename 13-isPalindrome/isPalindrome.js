function isPalindrome(word) {
  // Insert code here;
  let palindrome = false;
  for (let i = 0; i < word.length; i++)
  {
      if (word[i] == word[(i+word.length) - 1])
          palindrome = true;
  }
  return palindrome;
}

// Do not edit this line;
module.exports = isPalindrome;