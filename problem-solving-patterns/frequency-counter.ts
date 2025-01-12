/**
 * Frequency Counter
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
 *
 * example:
 * validAnagram('', '') // true
 * validAnagram('aaz', 'zza') // false
 * validAnagram('anagram', 'nagaram') // true
 * validAnagram('rat', 'car') // false
 * validAnagram('awesome', 'awesom') // false
 * validAnagram('qwerty', 'qeywrt') // true
 * validAnagram('texttwisttime', 'timetwisttext') // true
 */

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("anagram", "nagaram"));

// More optimal solution:

/**
 * Given two strings s and t, return true if t is an
 * anagram of s, and false otherwise.
 *
 * @param {string} s original string
 * @param {string} t possible anagram of s
 * @returns {boolean} If t is an anagram of s.
 */

function isAnagram(s: string, t: string): boolean {
  // If they're different lengths, we're done.
  if (s.length !== t.length) return false;

  // Letter Count Map.  Uses array for faster access than other structures.
  // Given, Javascript/Typescript has sparse arrays, we don't need to adjust
  // everything relative to any character (i.e. 'a').  Anagrams in this case
  // need not be limited to letters.  Any character, including letters,
  // punctuation and whitespace can be included.
  const map: number[] = [];

  // const map = new Array(26).fill(0);
  // const aCode = 'a'.charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    // Increment counter at array using index = charCode of letter.
    map[s.charCodeAt(i)] = (map[s.charCodeAt(i)] | 0) + 1;
    // map[s.charCodeAt(i)-aCode]++;

    // Decrement counter at array using index = charCode of letter.
    map[t.charCodeAt(i)] = (map[t.charCodeAt(i)] | 0) - 1;
    // map[t.charCodeAt(i)-aCode]--;
  }

  // If all recorded counts are zero,
  // then the same letters in the same quantity existed in both strings.
  return map.every((n) => n === 0);
}
