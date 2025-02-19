const parrots = [
    'bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot'
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matchedPairs = 0;
let totalPairs;

function iniciarJogo() {
    let numeroCartas;
    do {
        numeroCartas = parseInt(prompt('Com quantas cartas você quer jogar? (4 a 14 - números pares)'));
    } while (numeroCartas < 4 || numeroCartas > 14 || numeroCartas % 2 !== 0);

    totalPairs = numeroCartas / 2;
    const cartasSelecionadas = parrots.slice(0, totalPairs);
    const todasCartas = [...cartasSelecionadas, ...cartasSelecionadas];
    todasCartas.sort(comparador);

    const gameBoard = document.querySelector('.game-board');
    todasCartas.forEach(parrot => {
        const card = criarCarta(parrot);
        gameBoard.appendChild(card);
    });
}

function criarCarta(parrot) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="face back-face">
            <img src="./imagens/back.png" alt="Back of card">
        </div>
        <div class="face front-face">
            <img src="./imagens/${parrot}.gif" alt="${parrot}">
        </div>
    `;
    card.addEventListener('click', virarCarta);
    return card;
}

function virarCarta() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');
    moves++;

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.querySelector('.front-face img').src === 
                    secondCard.querySelector('.front-face img').src;

    if (isMatch) {
        matchedPairs++;
        disableCards();
        if (matchedPairs === totalPairs) {
            setTimeout(() => {
                alert(`Você ganhou em ${moves} jogadas!`);
                reiniciarJogo();
            }, 500);
        }
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', virarCarta);
    secondCard.removeEventListener('click', virarCarta);
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

function reiniciarJogo() {
    // Limpa o tabuleiro
    const gameBoard = document.querySelector('.game-board');
    gameBoard.innerHTML = '';
    
    // Reseta as variáveis
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    moves = 0;
    matchedPairs = 0;
    
    // Inicia um novo jogo
    iniciarJogo();
}

function comparador() {
    return Math.random() - 0.5;
}

iniciarJogo(); 