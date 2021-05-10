{
	let randomNumber = Math.floor(Math.random() * 3 + 1);
	let playerInput = prompt('Choose! 1: kamien, 2: papier, 3: nozyce.');
	
	const getMoveName = function(moveId){
		if(moveId == 1){
			return 'kamien';
		}
		else if(moveId == 2){
			return 'papier';
		}
		else if(moveId == 3){
			return 'nozyce'
		}
		else {
			return moveId;
		}
	}

	const displayResult = function () {
		let playerMove = getMoveName(playerInput);
		let computerMove = getMoveName(randomNumber);
		printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
	
		if (playerInput != 1 && playerInput != 2 && playerInput !=3) {
			printMessage('LOL, zla liczba');
		}
		else if (computerMove == playerMove) {
			printMessage('Remis, zagraj jeszcze raz!');
		}
		else if (computerMove == 'kamien' && playerMove == 'papier') {
			printMessage('Ty wygrywasz!');
		}
		else if (computerMove == 'papier' && playerMove == 'nozyce') {
			printMessage('Ty wygrywasz!');
		}
		else if (computerMove == 'nozyce' && playerMove == 'kamien') {
			printMessage('Ty wygrywasz!');
		}
		else {
			printMessage('Przegrywasz!');
		}
	}
	displayResult();
}