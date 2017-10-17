function changeName(val){
	var newFile = val.files;
	if(newFile.length >  0) {
		if(newFile[0].type == "audio/mp3" || newFile[0].type == "audio/ogg") {
			var actualLabel = document.getElementById('LabelSongFile');
			return actualLabel.textContent = newFile[0].name;
		}
		if(newFile[0].type == "image/jpeg" || newFile[0].type == "image/png") {
			var actualLabel = document.getElementById('LabelImgCover');
			return actualLabel.textContent = newFile[0].name;
		}
	} else {
		return;
	}
}



