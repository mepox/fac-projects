const MAX_CARDS = 12;
const RESOLVE_CARDS_DELAY = 1000; // in ms

const DEFAULT_CARD = "card card-bg-default";
const EMPTY_CARD = "empty-card";
const RED_CARD = "card card-bg-red";
const GREEN_CARD = "card card-bg-green";
const BLUE_CARD = "card card-bg-blue";
const YELLOW_CARD = "card card-bg-yellow";
const PINK_CARD = "card card-bg-pink";
const ORANGE_CARD = "card card-bg-orange";

let board;
let firstCardElement, secondCardElement;
let clickAllowed;

let bestScore = 0;
let currentScore;

function startGame() {
    ShowBestScore();
    createBoard();
    drawBoard();
    clickAllowed = true;
    currentScore = 0;
}

function ShowBestScore() {
    let text;
    if (bestScore == 0) {
        text = "You haven't played yet!";
    } else {
        text = bestScore + " (Lower number is better)";
    }
    document.getElementById("best-score").innerText = text;
}

function createBoard() {
    board = [];
    for (let i = 0; i < 2; i++) {
        placeOnBoard(RED_CARD);
        placeOnBoard(GREEN_CARD);
        placeOnBoard(BLUE_CARD);
        placeOnBoard(YELLOW_CARD);
        placeOnBoard(PINK_CARD);
        placeOnBoard(ORANGE_CARD);
    }
}

function placeOnBoard(card) {
    while(true) {
        let index = Math.floor(Math.random() * MAX_CARDS); // index >= 0 and index < 12
        if (board[index] == null) {
            board[index] = card;
            break;
        }
    }
}

function drawBoard() {
    let gameContainer = document.getElementById("game-container");
    gameContainer.innerHTML = "";

    for (let i = 0; i < MAX_CARDS; i++) {
        let cardId = "card-" + i;
        addCard(gameContainer, cardId);
    }
}

function onCardClick(cardElement) {
    // check if click allowed 
    if (!clickAllowed) {
        return;
    }

    // check if this the first card
    if (firstCardElement == null) {
        // save it and show it
        firstCardElement = cardElement;
        showCard(firstCardElement);
        currentScore++;
        return;
    }

    // check if the second card is not the same as the first one
    if (firstCardElement.id == cardElement.id) {
        return;
    }

    // this is the second card so save it then show it
    secondCardElement = cardElement;
    showCard(cardElement);
    currentScore++;

    // block any clicks until the pairs gets resolved
    clickAllowed = false;

    // resolve the pairs after a delay
    setTimeout(resolveCards, RESOLVE_CARDS_DELAY);
}

function resolveCards() {
    if (firstCardElement.className === secondCardElement.className) {
        removeCard(firstCardElement);
        removeCard(secondCardElement);
        firstCardElement.onclick = "";
        secondCardElement.onclick = "";        
    } else {
        hideCard(firstCardElement);
        hideCard(secondCardElement);        
    }

    firstCardElement = null;
    secondCardElement = null;
    clickAllowed = true;

    checkGameOver();
}

function checkGameOver() {
    let emptyCardsCount = document.getElementById("game-container").querySelectorAll("." + EMPTY_CARD).length;

    if (emptyCardsCount == MAX_CARDS) {
        let message = "Well done, you have completed the game with " + currentScore + " clicks. ";

        if (bestScore == 0) {
            bestScore = currentScore;
        } else {
            if (currentScore < bestScore) {
                bestScore = currentScore;
                message += "You beat your best score, nice!";
            }
        }

        alert(message);
        startGame();
    }
}

function hideCard(cardElement) {
    cardElement.className = DEFAULT_CARD;
}

function removeCard(cardElement) {
    cardElement.className = EMPTY_CARD;
}

function showCard(cardElement) {
    let index = getBoardIndexFromCardElement(cardElement);
    cardElement.className = board[index];
}

function getBoardIndexFromCardElement(cardElement) {
    return cardElement.id.split("-")[1];
}

function addCard(container, cardId) {
    let card = "<div class='" + DEFAULT_CARD + "' id='" + cardId + "' onclick='onCardClick(this)'></div>";
    container.innerHTML += card;
}