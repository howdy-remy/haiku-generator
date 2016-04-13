var haiku = require('./haiku');

//loading and parsing the file//
var fs = require("fs"),
		cmudictFile = readCmudictFile('./cmudict.txt'),
		textBySyllableCount = [];

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function formatData(data){    
  var lines = data.toString().split("\n"),
      linesArray
  lines.forEach(function(line){    
  	linesArray = line.split("  "); 
  	sortBySyllable(linesArray);
	});    
}

formatData(cmudictFile);
//END loading and parsing the file//

function sortBySyllable(linesArray){
	var matches = linesArray[1].match(/\d/g);
	var sylbCount = (matches) ? matches.length : 0;

	if(!textBySyllableCount[sylbCount]){ //if there isn't a sub array for the current syllable amount
		//figure out how many to add 
		var subArraysNeeded = sylbCount - textBySyllableCount.length + 1;

		//add that many
		for(var i = subArraysNeeded; i > 0; i--){
			textBySyllableCount.push([]);
		}
	}
	
	textBySyllableCount[sylbCount].push(linesArray[0]);
}



haiku.createHaiku([[2,3],[3,4],[5]], textBySyllableCount);