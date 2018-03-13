  var argument = String(process.argv.slice(2));
  var try1 = argument.split('');
function obfuscate(argument) {
  for (var i = 0; i < try1.length; i++){
    try1[i] == "a" ? try1[i] = 4 : try1;
    try1[i] == "e" ? try1[i] = 3 : try1;
    try1[i] == "o" ? try1[i] = 0 : try1;
    try1[i] == "l" ? try1[i] = 1 : try1;

    /*
    if (try1[i] === "a"){
  		try1[i] = "4";  		
  	} else if (try1[i] === "e"){
  		try1[i] = "3"; 	
    } else if (try1[i] === "o"){
    	try1[i] = "0";
    } else if (try1[i] === "l"){
    	try1[i] = "1";
    }*/ 
  } return try1.join("");
}

console.log(obfuscate(argument));