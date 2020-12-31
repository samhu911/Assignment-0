function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let unionSet = new Set();
  for (let arg of args)
  {
      for (let num of arg)
      {
          unionSet.add(num);
      }
  }
  return unionSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;