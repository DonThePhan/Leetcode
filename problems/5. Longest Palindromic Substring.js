/*
Given a string s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let longestPalindrome = "";
  let palindrome;

  for (let i = 0; i < s.length; i++) {
    palindrome = s[i];
    for (let j = 1; true; j++) {
      if (!s[i - j] || !s[i + j]) break;

      if (s[i - j] === s[i + j]) {
        palindrome = s[i - j] + palindrome + s[i + j];
      } else break;
    }
    if (palindrome.length > longestPalindrome.length) {
      longestPalindrome = palindrome;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (!s[i + 1]) break;
    palindrome = s[i] + s[i + 1];
    if (palindrome[0] !== palindrome[1] || !palindrome) continue;

    for (let j = 1; true; j++) {
      if (!s[i - j] || !s[i + j + 1]) break;

      if (s[i - j] === s[i + j + 1]) {
        palindrome = s[i - j] + palindrome + s[i + j + 1];
      } else break;
    }
    if (palindrome.length > longestPalindrome.length) {
      longestPalindrome = palindrome;
    }
  }

  return longestPalindrome;
};

console.log(
  longestPalindrome(
    "flsuqzhtcahnyickkgtfnlyzwjuiwqiexthpzvcweqzeqpmqwkydhsfipcdrsjkefehhesubkirhalgnevjugfohwnlhbjfewiunlgmomxkafuuokesvfmcnvseixkkzekuinmcbmttzgsqeqbrtlwyqgiquyylaswlgfflrezaxtjobltcnpjsaslyviviosxorjsfncqirsjpkgajkfpoxxmvsyynbbovieoothpjgncfwcvpkvjcmrcuoronrfjcppbisqbzkgpnycqljpjlgeciaqrnqyxzedzkqpqsszovkgtcgxqgkflpmrikksaupukdvkzbltvefitdegnlmzeirotrfeaueqpzppnsjpspgomyezrlxsqlfcjrkglyvzvqakhtvfmeootbtbwfhqucbnuwznigoyatvkocqmbtqghybwrhmyvvuchjpvjckiryvjfxabezchynfxnpqaeampvaapgmvoylyutymdhvhqfmrlmzkhuhupizqiujpwzarnszrexpvgdmtoxvjygjpmiadzdcxtggwamkbwrkeplesupagievwsaaletcuxtpsxmbmeztcylsjxvhzrqizdmgjfyftpzpgxateopwvynljzffszkzzqgofdlwyknqfruhdkvmvrrjpijcjomnrjjubfccaypkpfokohvkqndptciqqiscvmpozlyyrwobeuazsawtimnawquogrohcrnmexiwvjxgwhmtpykqlcfacuadyhaotmmxevqwarppknoxthsmrrknu",
  ),
);
