let playerInput = prompt('Wybierz swój ruch! 1: kamien, 2: papier, 3: nozyce.');

console.log('Gracz wpisal: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
    playerMove = 'kamien';
}
else if (playerInput == 2) {
    playerMove = 'papier';
}
else if (playerInput == 3) {
    playerMove = 'nozyce';
}

printMessage('Twoj ruch to: ' + playerMove);
