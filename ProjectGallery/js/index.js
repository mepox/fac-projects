const IMG_PATH = "img/";

function onStart() {
    addCards();
}

function addCards() {
    let container = "card-container";

    document.getElementById(container).innerHTML = "";

    /* Portfolio Website */

    let title = "Portfolio Website";
    let image = "portfolio.png";
    let description = "<p>This a my Portfolio website for the 'Hobby Page' project.</p>" +
                    "<p class='bold'>Requirements:</p>" +
                    "<ul>" +
                    "<li>The page has a title which informs the user what the site is about</li>" +
                    "<li>The page has a logical layout and clear structure</li>" +
                    "<li>There are images on the page, with alt-text where appropriate</li>" +
                    "<li>The page is visually interesting, for example with borders or colours</li>" +
                    "<li>A list is visible somewhere on the page</li>" +
                    "<li>A user can click on a link that takes them to another website</li>" +
                    "<li>The page has a header element, and a footer element</li>" +
                    "<li>Somewhere on the page, the user can see today’s date. The date should always be correct. " +
                    "You’ll need to use JavaScript to generate the date, and DOM manipulation to display it.</li>" +
                    "</ul>";
    let link = "https://mepox.github.io/";                 
    addCard(container, title, image, description, link);

    /* Movie Data */
    
    title = "Movie Data Project";
    image = "movie-data.png";
    description = "<p>This is my 'Movie Data' project. The movies data is populated from a JavaScript object. " +
                    "The user can sort the movies by the year they were released, add a new movie and delete a movie.</p>" +
                    "<p class='bold'>Requirements:</p>" +
                    "<ul>" +
                    "<li>Store the object below in a JavaScript file in your codebase</li>" +
                    "<li>Render the data onto the webpage with DOM Manipulation</li>" +
                    "<li>Allow the user to affect the display of the data by interacting with the webpage</li>" +
                    "<li>Allow the user to update the data stored in the object by interacting with the webpage</li>" +
                    "</ul>";
    link = "https://mepox.github.io/fac-projects/MovieData/";
    addCard(container, title, image, description, link);

    /* Application Website */

    title = "Application Website";
    image = "application-website.png";
    description = "<p>This my Application Website.</p>" +
                    "<p class='bold'>Requirements:</p>" +
                    "<p>Your website must meet the following criteria:</p>" +
                    "<ul>" +
                    "<li>All code is written by you</li>" +
                    "<li>No external libraries (e.g. no Bootstrap, React or GitHub Pages themes, but external fonts/icons are fine)</li>" +
                    "<li>Tells us about who you are</li>" +
                    "<li>Tells us about why you are applying for the programme</li>" +
                    "<li>Shows your progress through the application projects (e.g. links to your deployed projects)</li>" +
                    "<li>Hosted on GitHub Pages</li>" +
                    "<li>Links back to the GitHub repository that contains the code for your site</li>" +
                    "</ul>" +
                    "<p>To demonstrate your learning your site must have at least one example of each of these:</p>" +
                    "<ul>" +
                    "<li>Semantic HTML5 elements</li>" +
                    "<li>CSS grid or flexbox layout (or both)</li>" +
                    "<li>DOM event listeners for user interaction (e.g. click, keydown)</li>" +
                    "<li>DOM updates in response to user interaction (e.g. showing/hiding an element, changing text or styles)</li>" +
                    "</ul>";
    link = "https://mepox.github.io/fac-projects/Website/";
    addCard(container, title, image, description, link);

    /* Game Project */

    title = "Simple Memory Game";
    image = "game.png";
    description = "<p>This is a Simple Memory Game for the 'Game' project.</p>" + 
                    "<p>Made with HTML, CSS and JavaScript. No external libraries/frameworks were used.</p>";
    link = "https://mepox.github.io/fac-projects/Game/";
    addCard(container, title, image, description, link);

    /* Project Gallery */

    title = "Project Gallery";
    image = "project-gallery.png";
    description = "<p>The current website. Displays a gallery of my projects for the application.</p>" +
                    "<p class='bold'>Requirements:</p>" +
                    "<ul>" +
                    "<li>Have a section or card for each project</li>" +
                    "<li>Each card should have a title, an image of your project, and a description</li>" +
                    "<li>Use flexbox to arrange the cards on the page</li>" +
                    "<li>Resize cards based on screen width</li>" +
                    "<li>Adapt the layout of the gallery when the browser window resizes</li>" +
                    "<li>Display the cards in a single column on mobile devices</li>" +
                    "<li>Have a clickable button on each card that opens and closes the description text</li>" +
                    "</ul>";
    link = "https://mepox.github.io/fac-projects/ProjectGallery/";
    addCard(container, title, image, description, link);
}

function addCard(container, title, image, description, link) {    
    image = IMG_PATH + image;

    /* add card div */
    let card = "<div class='card'>";

    /* add title */
    card += "<div class='card-title'>" +
            "<h1 class='centered'>" + title + "</h1>" +
            "</div>";

    /* add image */
    card += "<div class='card-image centered'>" +
            "<img src='" + image + "' alt='" + title + "'>" +
            "</div>";

    /* add description button */
    card += "<div class='card-button centered'>" +
            "<button class ='description-button' onclick='toggleDescription(this)'>Show Description</button>" +
            "</div>";

    /* add description */
    card += "<div class='card-description' style='display:none'>" + description +
            "<p><b>Link: </b>" + "<a href='" + link + "' target='_blank'>Click here to visit the project</a></p>" +
            "</div>";

    /* close card div */
    card += "</div>";

    document.getElementById(container).innerHTML += card;
}

function toggleDescription(button) {    
    let cardDescription = button.parentElement.parentElement.querySelector(".card-description");    
    
    if (cardDescription.style.display === "none") {
        cardDescription.style.display = "block";
        button.innerText = "Hide Description";
    } else {
        cardDescription.style.display = "none";
        button.innerText = "Show Description";
    }
}