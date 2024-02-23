window.onload = function() {
    const b = document.querySelector("button");
    b.addEventListener("click", generateRandomCard);
};

function generateRandomCard() {
    const suites = ["♦","♥","♠","♣"];
    const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const suiteIndex = Math.floor(Math.random() * suites.length);
    const cardIndex = Math.floor(Math.random() * cards.length);

    const randomSuite = suites[suiteIndex];
    const randomCard = cards[cardIndex];
    const suiteColor = suiteIndex < 2 ? "red" : "black"; // Red for Diamonds and Hearts, Black for Spades and Clubs

    // Assuming you have separate elements for each corner and the center suite symbol
    const topSuite = document.querySelector(".card .top");
    const bottomSuite = document.querySelector(".card .bottom");
    const centerSuite = document.querySelector(".card-suit"); // Make sure this is the correct class for the center suite

    topSuite.innerText = randomCard;
    bottomSuite.innerText = randomCard;
    centerSuite.innerHTML = randomSuite;

    // Apply the color to all relevant elements
    topSuite.style.color = suiteColor;
    bottomSuite.style.color = suiteColor;
    centerSuite.style.color = suiteColor;
}
