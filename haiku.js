//go through file and separate by line
//if line has 1 number - push to index 0
//if line has 2 numbers - push to index 1
//...

function createHaiku(structure){
	var finalPoem = [];
	//for each line 
	for(var i = 0; i < structure.length; i++){
		if(structure[i] === structure[i]){ 	//for each syllable 

			//find a matching word
			finalPoem.push('word' + structure[i]); 	//add it to haiku array

		}
	}
	//log haiku array join by line breaks
	console.log(finalPoem.join("\n"));
}

module.exports = {
	createHaiku: createHaiku
}