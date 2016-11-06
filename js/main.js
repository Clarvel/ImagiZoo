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
	"giraffe":"https://www.stlzoo.org/animals/abouttheanimals/mammals/hoofedmammals/reticulatedgiraffe/",
	"elephant":"https://www.stlzoo.org/animals/abouttheanimals/mammals/asianelephant/",
	"lion":"https://www.stlzoo.org/animals/abouttheanimals/mammals/carnivores/lion/",
	"tiger":"https://www.stlzoo.org/animals/abouttheanimals/mammals/carnivores/amurtiger/",
	"gorilla":"https://www.stlzoo.org/animals/abouttheanimals/mammals/lemursmonkeysapes/westernlowlandgorilla/",
	"sea%20lion":"https://www.stlzoo.org/animals/abouttheanimals/mammals/sealssealions/californiasealion/",
	"penguin":"https://www.stlzoo.org/animals/abouttheanimals/birds/penguins/",
	"alligator":"https://www.stlzoo.org/animals/abouttheanimals/reptiles/alligatorsandcrocodiles/",
	"zebra":"https://www.stlzoo.org/animals/abouttheanimals/mammals/hoofedmammals/grevyszebra/",
	"rhinoceros":"https://www.stlzoo.org/animals/abouttheanimals/mammals/hoofedmammals/blackrhinoceros/",
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
	correctName = 'giraffe'
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
		open(urls[correctName[0]])
	})


	onResize()
}
function onPlay(){
	mainMenu.style.display = 'none'
	game.style.display = ''
	// load in new DD img
	let keys = Object.keys(urls)
	let chosen = [keys[keys.length * Math.random() << 0]]
	let correctPos = 4 * Math.random() << 0
	let iteration = 1 + 5 * Math.random() << 0
	questionImg.src = `images/${chosen[0]}/${chosen[0]}_00${iteration}_dd.png`
	correctId = optionImgs[correctPos]
	correctName = [chosen[0], iteration]
	for(let a in optionImgs){
		iteration = 1 + 5 * Math.random() << 0
		if(a == correctPos){
			optionImgs[a].src = `images/${chosen[0]}/${chosen[0]}_00${iteration}_resc.png`
		}else{
			// load in new option imgs
			// HAHAHA u should fix this
			let k = keys[keys.length * Math.random() << 0]
			while(chosen.indexOf(k) != -1){
				k = keys[keys.length * Math.random() << 0]
			}
			chosen.push(k)
			optionImgs[a].src = `images/${k}/${k}_00${iteration}_resc.png`
		}
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
		popup.style.backgroundImage = `url(images/${correctName[0]}/${correctName[0]}_00${correctName[1]}_resc.png)`
		popupHeader.innerHTML = correctName[0].toUpperCase()
	}else{
		evt.target.style.opacity = '0.5';
	}
}