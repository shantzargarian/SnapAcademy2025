import catalog from "./catalog.js";

const cardContainer = document.getElementById("card-container");
const templateCard = document.querySelector(".card");

let partySize = parseInt(document.getElementById("party-size").value, 10);
let showFavoritesOnly = false;

document.addEventListener("DOMContentLoaded", () => {
  //this is a listener that checks when my party-size is modified or when the "Shant's Favorites!" button is pressed
  const partySizeInput = document.getElementById("party-size");
  partySizeInput.addEventListener("change", refreshCards);

  const favoritesButton = document.getElementById("favorites-button");
  favoritesButton.addEventListener("click", toggleFavorites);

  refreshCards();
});

document.getElementById("teehee-button").onclick = function () {
  location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
};

function showCards() {
  //this functions contains most of the functionality for displaying the cards
  //it is based off of the show cards function initially included with modifications
  //it pulls all data from a const contained int catalog.js which stores all the data that the page uses


  //scale factor is div 2 as the original party size is 2 people so whenever it is changed this number is modified then multiplied
  //by the ingredients to update the number and display a correct amount for the according party size
  const scaleFactor = partySize/2

  const recipesToShow = showFavoritesOnly ? catalog.filter((catalog)=> catalog.favorite) : catalog;


  //this for loop iterates through the 16 different recipies/dishes
  for (let i = 0; i < recipesToShow.length; i++) {
    const recipe = recipesToShow[i];
    let title = recipe.title;
    let image = recipe.image;
    
    //this loop handles pulling and ordering the ingredients into a list and uses f-strings to handle each row
    const ingredientsList = document.createElement('ul');
    for(let j=0; j < recipe.ingredients.length; j++){
      let ingredients  = recipe.ingredients[j];
      const li = document.createElement('li');
      li.textContent = `${ingredients.amount * scaleFactor} ${ingredients.unit} ${ingredients.item}`;
      ingredientsList.appendChild(li);
    }

    //this loop handles pulling and ordering the macros into a list and uses f-strings to handle each row
    const macrosList = document.createElement('ul');
    for(let j=0; j < recipe.macros.length; j++){ 
      let macros = recipe.macros[j];
      const li = document.createElement('li');
      li.textContent = `${macros.macro} ${macros.value * scaleFactor} ${macros.unit}` 
      macrosList.appendChild(li);
    }

    //this loop handles pulling all of the directions/instructions for each recipe and orders with an end-line/break
    const directionsParagraph = document.createElement('p');
    for (let j=0; j < recipe.directions.length; j++){ 
      let directions = recipe.directions[j];
      const textNode = document.createTextNode(directions)
      directionsParagraph.appendChild(textNode)

      directionsParagraph.innerHTML = recipe.directions.join('</br>')
    }

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    nextCard.style.display = "flex";

    nextCard.addEventListener("click", () => toggleDirections(nextCard));

    editCardContent(nextCard, title, image); // Edit title and image
    const bulletContainer = nextCard.querySelector(".card-content-text .dynamic-bullets");
    if (bulletContainer) {
      bulletContainer.innerHTML = ""; // Clear any existing content
    
      // Create and append the "Ingredients:" heading.
      const ingredientsHeader = document.createElement("h4");
      ingredientsHeader.textContent = "Ingredients:";
      bulletContainer.appendChild(ingredientsHeader);
    
      bulletContainer.appendChild(ingredientsList);
    
      // Create and append the "Macros:" heading.
      const macrosHeader = document.createElement("h4");
      macrosHeader.textContent = "Macros:";
      bulletContainer.appendChild(macrosHeader);
    
      bulletContainer.appendChild(macrosList);
    }
    
    //appends the data to their selective classes to appear correctly in the html
    const paragraphContainer = nextCard.querySelector(".card-content-text .directions-text");
    const directionsHeader = document.createElement("h4");
    directionsHeader.textContent = "Instructions:";
    paragraphContainer.appendChild(directionsHeader);
    paragraphContainer.appendChild(directionsParagraph);


    // Append the fully updated card to the card container.
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL) {
  //this function is called when a new card is being generated, which updates its name and picture

  // Update the title.
  const cardHeader = card.querySelector(".card h2");
  if (cardHeader) {
    cardHeader.textContent = newTitle;
  } else {
    console.warn("Card header not found.");
  }

  // Update the image.
  const cardImage = card.querySelector(".card-content-images img");
  if (cardImage) {
    cardImage.src = newImageURL;
    cardImage.alt = `${newTitle} Poster`;
  } else {
    console.log("Card image not found.");
  }

  console.log("New card created:", newTitle);
}

function toggleDirections(card) {
  //when the user clicks on a card it extends and shows the instructions to make the food
  const directions = card.querySelector(".directions-text");
  directions.classList.toggle("hidden");
}

function refreshCards() {
  //this is a helper function that refreshes the displayed cards when the party size is changed or favorites button is triggered

  // Read the latest party size input
  const partySizeInput = document.getElementById("party-size");
  partySize = parseInt(partySizeInput.value, 10);

  // Clear the current cards
  cardContainer.innerHTML = "";

  // Render updated set based on filters (e.g. Shant's favorites)
  showCards();
}

function toggleFavorites() {
  //Function to display 8 of my favorite dishes
  showFavoritesOnly = !showFavoritesOnly;

  const button = document.getElementById("favorites-button");
  button.textContent = showFavoritesOnly ? "Show All Dishes" : "Shant's Favorites!";

  refreshCards();
}