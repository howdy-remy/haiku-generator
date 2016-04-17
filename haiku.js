function createHaiku(structure, text){
	var finalPoem = [];
	for(var i = 0; i < structure.length; i++){ //for each line
		var line = '';

		for(var j = 0; j < structure[i].length; j++) { //for each syllable request
			var word = searchForMatchingWord(text, structure[i][j]); //find a word with the text and current syllable count
			line = line.concat(word + ' '); //add word to line
		};

		finalPoem.push(line); 	//add line to haiku array
	}
	//log haiku array join by line breaks
	console.log(finalPoem.join("\n"));
}

function searchForMatchingWord(text, syllables){
	randomIndex = Math.floor(Math.random() * text[syllables].length);	
	return text[syllables][randomIndex];
}

module.exports = {
	createHaiku: createHaiku
}


