var word = process.argv.slice(2);
function reverseWord(word) {
  var output = '';
  for (var i = 0; i < word.length; i++) {
    var result = '';
    var letter = '';
    letter = word[i].split ('');
    for (var j = letter.length - 1; j >= 0; j--) {
      result += letter[j];
    }
    output += result + '\n';
  }
  return output.substring(0, output.length - 1);
}

console.log(reverseWord(word));