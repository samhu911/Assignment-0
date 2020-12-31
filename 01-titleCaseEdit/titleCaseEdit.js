function titleCaseEdit(title) {
  // Insert code here;
  let string = title.toLowerCase().split(' ');
  for (let i = 0; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1); 
  }
  string = string.join(' ');
  return string;
}

// Do not edit this line;
module.exports = titleCaseEdit;