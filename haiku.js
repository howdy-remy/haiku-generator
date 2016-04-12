//go through file and separate by line
//if line has 1 number - push to index 0
//if line has 2 numbers - push to index 1
//...

function createHaiku(structure, text){
	var finalPoem = [];
	//for each line 
	for(var i = 0; i < structure.length; i++){
		for(var j = 0; j < structure[i].length; j++) {
			var word = searchForMatchingWord(text, structure[i][j]);
			console.log(word);
			finalPoem.push(word); 	//add it to haiku array
		};
	}
	//log haiku array join by line breaks
	console.log(finalPoem.join("\n"));
}

function searchForMatchingWord(text, syllables){
	for (var i = 0; i < text.length; i++) {
		if(text[i][0] === syllables){
			return text[i][1];
		}
	};
}

module.exports = {
	createHaiku: createHaiku
}