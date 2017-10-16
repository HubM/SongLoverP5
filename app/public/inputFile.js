function changeName(val){
	var newFile = val.files;
	if(newFile.length >  0) {
		var actualLabel = document.getElementById('LabelSongFile');
		return actualLabel.textContent = newFile[0].name;
	} else {
		return;
	}
}



