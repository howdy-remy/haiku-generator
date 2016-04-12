var haiku = require('./haiku');

//loading and parsing the file//
var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');
var textWithSyllableCount = [];

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function formatData(data){    
  var lines = data.toString().split("\n"),
      linesArray
  lines.forEach(function(line){    
  	linesArray = line.split("  "); 
  	linesArray.unshift(addSyllableCount(linesArray));
  	textWithSyllableCount.push(linesArray);
	});    		
}

formatData(cmudictFile);
//END loading and parsing the file//

//sorting by syllable
function addSyllableCount(linesArray){
	//create an array that contains any matches
	var matches = linesArray[1].match(/\d/g)

	if(matches){ //a couple lines didn't have numbers that would break things. 
		return matches.length;	//return the length of the array (number of syllables counted/matched)
	} else {
		return 0; //or none
	}
}


haiku.createHaiku([5,7,5], textWithSyllableCount);