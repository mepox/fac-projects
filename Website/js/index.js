const IMG_PATH = "img/";

function onStart() {
    addShowcaseCards();
}

function addShowcaseCards() {
    // portfolio, project gallery, movie data, website, game
    let rootDiv = document.getElementById("showcase-container");
    rootDiv.innerHTML = "";

    let title = "Portfolio Website";
    let image = "portfolio.png";
    let url = "https://mepox.github.io/";
    addShowcaseCard(rootDiv, title, image, url);

    title = "Project Gallery";
    image = "project-gallery.png";
    url = "https://mepox.github.io/fac-projects/ProjectGallery/";
    addShowcaseCard(rootDiv, title, image, url);

    title = "Movie Data Project";
    image = "movie-data.png";
    url = "https://mepox.github.io/fac-projects/MovieData/";
    addShowcaseCard(rootDiv, title, image, url);

    title = "Application Website";
    image = "application-website.png";
    url = "https://mepox.github.io/fac-projects/Website/";
    addShowcaseCard(rootDiv, title, image, url);

    title = "Simple Memory Game";
    image = "game.png";
    url = "https://mepox.github.io/fac-projects/Game/";
    addShowcaseCard(rootDiv, title, image, url);
}

function addShowcaseCard(rootDiv, title, image, url) {
    image = IMG_PATH + image;    

    let showcaseCard = "";

    /* Create a showcase card */
    showcaseCard += "<div class='showcase-card' onclick='window.open(\"" + url + "\")'>";

    /* Add title */
    showcaseCard += "<div class='showcase-card-title'><h3>" + title + "</h3></div>";

    /* Add image */
    showcaseCard += "<div class='showcase-card-image'>" +
                    "<img src='" + image + "' alt='Showcase Card Image'>" +
                    "</div>";

    /* Close showcase card */
    showcaseCard += "</div>";

    rootDiv.innerHTML += showcaseCard;
}