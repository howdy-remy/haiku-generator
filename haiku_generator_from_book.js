//THIS FILE GENERATES RANDOM HAIKU FROM BOOK FILE

//requires
var haiku = require('./haiku'),
		syllable = require('syllable'),
		fs = require("fs"),

		booktext = textFileToString(process.argv[3]),
		sylbArgs = JSON.parse(process.argv[2]),
		textBySyllableCount = [];

function textFileToString(file){
  return fs.readFileSync(file).toString().replace(/\n/gm,' '); //remove existing linebreaks
}

function formatData(data){    
  var words = data.toString().split(" ");
  words.forEach(sortBookBySyllable);
}

formatData(booktext);


function sortBookBySyllable(word, index, array){
	word = word.replace(/[.,:;"']/g, '')
	var sylbCount = syllable(word);

	if(!textBySyllableCount[sylbCount]){ //if there isn't a sub array for the current syllable amount
		//figure out how many to add 
		var subArraysNeeded = sylbCount - textBySyllableCount.length + 1;

		//add that many
		for(var i = subArraysNeeded; i > 0; i--){
			textBySyllableCount.push([]);
		}
	}
	
	textBySyllableCount[sylbCount].push(word);
}

haiku.createHaiku(sylbArgs, textBySyllableCount);