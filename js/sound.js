let _audioObjs = {}
let _sources = {
		right:"./audio/right.wav",
		select:"./audio/select.wav",
		wrong:"./audio/wrong.wav"
	}
	
function play(src){
	let audioObj
	if(src in _sources){
		src = _sources[src]
	}
	if(src in _audioObjs){
		let a
		for(a = _audioObjs[src].length-1; a >= 0; a--){
			audioObj = _audioObjs[src][a]
			if(audioObj.paused){
				break
			}
		}
		if(a <= 0){
			audioObj = _audioObjs[src][0].cloneNode()
			_audioObjs[src].push(audioObj)
		}
	}else{
		audioObj = new Audio(src)
		_audioObjs[src] = [audioObj]
	}
	audioObj.play()
}
window.play = play