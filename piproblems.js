var argument = process.argv.slice(2);
function pigProblem(argument) { 
 var a ='';
 for (var i = 0; i < argument.length; i++) {
 	a+=argument[i].substring(1) + argument[i][0] + 'ay ';
 }return a;
} 

console.log(pigProblem(argument));