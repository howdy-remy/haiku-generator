var haiku = require('./haiku');

//loading and parsing the file//
var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function formatData(data){    
  var lines = data.toString().split("\n"),
      linesArray
  lines.forEach(function(line){    
  	linesArray = line.split("  "); 
  	addSyllableCount(linesArray);
	});    		


}

formatData(cmudictFile);
//END loading and parsing the file//

//sorting by syllable
function addSyllableCount(linesArray){
		var matches = linesArray[1].match(/\d/g)
		console.log(matches);
}


haiku.createHaiku([5,7,5]);