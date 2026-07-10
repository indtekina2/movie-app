const valid_categoris = ["response", "seen"];

// showing the cards in the screen
function showMovie(movie, category) {
  if (valid_categoris.includes(category)) {
    let card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-id", movie.imdbID);

    let img = document.createElement("img");
    img.src = movie.Poster;
    card.appendChild(img);

    let title = document.createElement("h2");
    title.textContent = movie.Title;
    card.appendChild(title);

    let text = document.createElement("p");
    text.textContent = `[${movie.Type}] ${movie.Year}`;
    card.appendChild(text);

    let btn = document.createElement("button");

    if (category == "response") {
      btn.textContent = "Watch Later";
      btn.className="later"
    } else {
      btn.textContent = "Watched";
    }
    card.appendChild(btn);

    let MovieContainer = document.querySelector(`.movieContainer.${category}`);
    MovieContainer.appendChild(card);
  } else {
    console.error("invalid container");
  }
}

// remove cards using their id
function removeMovie(id) {
  let cards = document.querySelectorAll(".card");

  for (let card of cards) {
    if (card.getAttribute("data-id") == id) {
      card.remove();
      break;
    }
  }
}

// removeMovie("imdbID");