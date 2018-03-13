/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

function joinList(argument){
	var list = "";
  for (var i = 0; i < argument.length; i++) {
   if (i === argument.length - 1) {
    list += argument[i];

		} else { 
  list += argument[i] + ", ";
		}
	} return list;

}
var concepts = joinList(conceptList);

// Write your code here...

console.log(concepts);

