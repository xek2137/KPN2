'use strict';

const scoreTable = [0,0];
const scoreBox = document.querySelector('.score-box');
const clearMessages = function() {
	document.getElementById('messages').innerHTML = '';
}

const printMessage = function(msg) {
	let div = document.createElement('div');
	div.style.color = 'white';
	div.style.fontsize = '24px';
	div.style.padding = '12px';
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const playGame = function(playerInput) {
	clearMessages();
	let randomNumber = Math.floor(Math.random() * 3 + 1);

	const getMoveName = function(moveId) {
		if(moveId === 1) {
			return 'kamien';
		}
		else if(moveId === 2) {
			return 'papier';
		}
		else if(moveId === 3) {
			return 'nozyce'
		}
	}
	const displayResult = function () {
		let playerMove = getMoveName(playerInput);
		let computerMove = getMoveName(randomNumber);
		printMessage(`Zagrałem ${computerMove}, a Ty ${playerMove}`);

		if (playerInput !== 1 && playerInput !== 2 && playerInput !==3) {
			printMessage('LOL, zla liczba');
		}
		else if (computerMove === playerMove) {
			printMessage('Remis, zagraj jeszcze raz!');
		}
		else if (computerMove === 'kamien' && playerMove === 'papier') {
			printMessage('Ty wygrywasz!');
			scoreTable[0]++;
		}
		else if (computerMove === 'papier' && playerMove === 'nozyce') {
			printMessage('Ty wygrywasz!');
			scoreTable[0]++;
		}
		else if (computerMove === 'nozyce' && playerMove === 'kamien') {
			printMessage('Ty wygrywasz!');
			scoreTable[0]++;
		}
		else {
			printMessage('Przegrywasz!');
			scoreTable[1]++
		}
		scoreBox.innerHTML = `Komputer: ${scoreTable[1]} ****** Gamer: ${scoreTable[0]}`;
	}
	displayResult();
}

/* INTRO SECTION */
const fadeOut = function (tweenMax = TweenMax) {

	tweenMax.to(".myBtn", 1, {
		y: -100,
		opacity: 0
	});

	tweenMax.to(".screen", 2, {
		y: -400,
		opacity: 0,
		ease: Power2.easeInOut,
		delay: 2
	});

	tweenMax.from(".overlay", 2, {
		ease: Power2.easeInOut
	});

	tweenMax.to(".overlay", 2, {
		delay: 2.6,
		top: "-110%",
		ease: Expo.easeInOut
	});

	tweenMax.to(".overlay-2", 2, {
		delay: 3,
		top: "-110%",
		ease: Expo.easeInOut
	});

	tweenMax.from(".content", 2, {
		delay: 3.2,
		opacity: 0,
		ease: Power2.easeInOut
	});

	tweenMax.to(".content", 2, {
		opacity: 1,
		y: -300,
		delay: 3.2,
		ease: Power2.easeInOut
	});
}


