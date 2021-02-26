function playGame(playerInput) {

    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    
    console.log('Wylosowana liczba to: ' + randomNumber);
    
    function getMoveName(value) {
        if (value == 1) {
            return 'kamien';
        }
        else if (value == 2) {
            return 'papier';
        }
        else if (value == 3) {
            return 'nozyce';
        }
        else {
            return 'nieznany ruch';
        }
    }
    
    let computerMove = getMoveName(randomNumber);
    printMessage('Moj ruch to: ' + computerMove);
    
    /*let playerInput = prompt('Wybierz swój ruch! 1: kamien, 2: papier, 3: nozyce.');*/
    console.log('Gracz wpisal: ' + playerInput);
    
    let playerMove = getMoveName(playerInput);
    printMessage('Twoj ruch to: ' + playerMove);
    
    
    function displayResult(ComputerMove, PlayerMove) {
        console.log('moves:', ComputerMove, PlayerMove);
    
        if (playerMove < 1 && playerMove > 3) {
            printMessage('LOL');
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
    
    displayResult(computerMove, playerMove);
    

}
document.getElementById('choose-rock').addEventListener('click', function(){
    playGame(1);
  });
  document.getElementById('choose-paper').addEventListener('click', function(){
    playGame(2);
  });
  document.getElementById('choose-scissors').addEventListener('click', function(){
    playGame(3);
  });




