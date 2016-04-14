var haiku = require('./haiku');

//loading and parsing the file//
var fs = require("fs"),
		cmudictFile = readCmudictFile('./cmudict.txt'),
		sylbArgs = JSON.parse(process.argv[2]),
		textBySyllableCount = [];
		// console.log(sylbArgs + ' is a/n ' + typeof sylbArgs);

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function formatData(data){    
  var lines = data.toString().split("\n"),
      linesArray
  lines.forEach(function(line){    
  	linesArray = line.split("  "); 
  	sortBySyllable(linesArray); //
	});    
}

formatData(cmudictFile);
//END loading and parsing the file//

//figure out the syllable count and push to subarray in sorted array by word count
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

haiku.createHaiku(sylbArgs, textBySyllableCount);