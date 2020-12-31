function frequencyCounter(word) {
  // Insert code here;
  let counter = {};
  for (let i = 0; i < word.length; i++)
  {
      let character = word.charAt(i);
      if(counter[character])
          counter[character]++;
      else
          counter[character] = 1
  }
  return counter;
}

// Do not edit this line;
module.exports = frequencyCounter;