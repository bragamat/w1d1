var argument = process.argv.slice(2);
function reverse(argument) {
 var string = '';
 for (var i = 0; i < argument.length; i++) {
 	var word = '';
 	var output = '';
 	output = argument[i].split('');
 	for (var j = output.length -1 ; j >= 0; j--) {
 		word+= output[j];
 	}
 	string += word +'\n';
 } 
 return string.substring(0, string.length - 1);
} 

console.log(reverse(argument));

