let mainMenu
let game
let popup
let playButton
let questionImg
let optionImgs
let correctId
let correctName
let popupHeader
let zooLocUrl
let replayButton

let urls = {
	"Giraffe":"https://www.stlzoo.org/animals/abouttheanimals/mammals/hoofedmammals/reticulatedgiraffe/",
	"Elephant":"https://www.stlzoo.org/animals/abouttheanimals/mammals/asianelephant/",
	"Lion":"https://www.stlzoo.org/animals/abouttheanimals/mammals/carnivores/lion/",
	"Tiger":"https://www.stlzoo.org/animals/abouttheanimals/mammals/carnivores/amurtiger/",
	"Gorilla":"https://www.stlzoo.org/animals/abouttheanimals/mammals/lemursmonkeysapes/westernlowlandgorilla/",
	"Sea Lion":"https://www.stlzoo.org/animals/abouttheanimals/mammals/sealssealions/californiasealion/",
	"Penguin":"https://www.stlzoo.org/animals/abouttheanimals/birds/penguins/",
	"Alligator":"https://www.stlzoo.org/animals/abouttheanimals/reptiles/alligatorsandcrocodiles/",
	"Zebra":"https://www.stlzoo.org/animals/abouttheanimals/mammals/hoofedmammals/grevyszebra/",
	"Rhinoceros":"https://www.stlzoo.org/animals/abouttheanimals/mammals/hoofedmammals/blackrhinoceros/",
}

window.addEventListener('resize', onResize)

function main(){
	mainMenu = document.getElementById('main view')
	game = document.getElementById('game view')
	popup = document.getElementById('popup view')
	playButton = document.getElementById('play button')
	questionImg = document.getElementById('question img')
	optionImgs = [
		document.getElementById('img 0'),
		document.getElementById('img 1'),
		document.getElementById('img 2'),
		document.getElementById('img 3')
	]
	correctId = optionImgs[3]
	correctName = 'Reticulated Giraffe'
	popupHeader = document.getElementById('animal name')
	zooLocUrl = document.getElementById('zoo location')
	replayButton = document.getElementById('replay button')

	playButton.addEventListener('click', onPlay)

	questionImg.addEventListener('click', ()=>{
		game.style.display = 'none'
		mainMenu.style.display = ''
	})

	for(let a in optionImgs){
		optionImgs[a].addEventListener('click', onSelect)
	}

	replayButton.addEventListener('click', onPlay)

	zooLocUrl.addEventListener('click', ()=>{
		open(urls['Giraffe'])
	})


	onResize()
}
function onPlay(){
	mainMenu.style.display = 'none'
	game.style.display = ''
	// load in new DD img
	for(let a in optionImgs){
		// load in new option imgs
		optionImgs[a].style.opacity = '1'
	}

}
function onResize(){
	if(window.innerWidth > window.innerHeight){
		game.style.flexDirection = 'row'
	}else{
		game.style.flexDirection = 'column'
	}
}
function onSelect(evt){
	if(evt.target == correctId){
		game.style.display = 'none'
		popup.style.display = ''
		popup.style.backgroundImage = `url(${evt.target.src})`
		popupHeader.innerHTML = correctName
	}else{
		evt.target.style.opacity = '0.5';
	}
}