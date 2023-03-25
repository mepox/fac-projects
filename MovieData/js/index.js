let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        "Meryl Streep",
        "Bill Murray",
        "Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
};

document.addEventListener("DOMContentLoaded", () => {
	onStart();
});

function onStart() {    
    showMovies();
}

function showMovies() {
    let movies = "";

    for (let i = 0; i < Object.keys(movieData).length; i++) {
        let title = Object.entries(movieData)[i][0];        
        let plot = Object.entries(movieData)[i][1].plot;
        let casts = Object.entries(movieData)[i][1].cast;
        let runtime = Object.entries(movieData)[i][1].runtime;
        let rating = Object.entries(movieData)[i][1].rating;
        let year = Object.entries(movieData)[i][1].year;

        /* Create a movie card */
        movies += "<div class='movie-card'>";

        /* Add the movie title */
        movies += "<div class='movie-title'><h2 class='centered'>" + title + "</h2></div>";

        /* Add the movie plot */
        movies += "<div class='movie-plot'><h3 class='centered'>" +  plot + "</h3></div>";

        /* Add the movie casts */
        movies += "<div class='movie-casts'><ul class='movie-casts-list'>";

        for (let castIndex = 0; castIndex < casts.length; castIndex++) {
            movies += "<li class='movie-casts-list-item'>" + casts[castIndex] + "</li>";
        }
        movies += "</ul></div>";

        /* Add the movie stats: runtime, rating, year */
        movies += "<div class='movie-stats centered'>" +
                "<div class='movie-runtime'>Runtime: " + runtime + " minutes </div>" +
                "<div class='movie-rating'>Rating: " + rating + "</div>" +
                "<div class='movie-year'>Year: " + year + "</div>" +
                "</div>";

        /* Add a delete button */
        movies += "<div class='delete-button-container centered'>" +
                "<button class='delete-button' onclick='deleteMovie(this)'>Delete movie</button>" +
                "</div>";

        /* Close the movie card */
        movies += "</div>";
    }

    document.getElementById("movies").innerHTML = movies;
}

function sortByNewest() {
    /* Sort the keys(titles) first */
    let sortedKeys = Object.keys(movieData).sort(function(key1, key2){return movieData[key2].year - movieData[key1].year})

    /* Loop through the keys(titles) and add them to an array */
    let sortedMovieArr = [];
    for (let i = 0; i < sortedKeys.length; i++) {
        sortedMovieArr.push(getMovieByTitle(sortedKeys[i]));
    }

    /* Set the new movieData from the array */
    movieData = Object.fromEntries(sortedMovieArr);

    /* Refresh the movie list */
    showMovies();
}

function sortByOldest() {
    /* Sort the keys(titles) first */
    let sortedKeys = Object.keys(movieData).sort(function(key1, key2){return movieData[key1].year - movieData[key2].year})

    /* Loop through the keys(titles) and add them to an array */
    let sortedMovieArr = [];
    for (let i = 0; i < sortedKeys.length; i++) {
        sortedMovieArr.push(getMovieByTitle(sortedKeys[i]));
    }

    /* Set the new movieData from the array */
    movieData = Object.fromEntries(sortedMovieArr);

    /* Refresh the movie list */
    showMovies();
}

function getMovieByTitle(title) {
    /* Find a movie by title */
    for (let i = 0; i < Object.keys(movieData).length; i++) {
        if (Object.entries(movieData)[i][0] === title) {
            return Object.entries(movieData)[i];
        }
    }
}

function addNewMovie() {
    let newMovieForm = document.forms["new-movie-form"];
    let newMovieTitle = newMovieForm["new-movie-title"].value;
    let newMoviePlot = newMovieForm["new-movie-plot"].value;
    let newMovieCast = newMovieForm["new-movie-cast"].value.split(",");
    let newMovieRuntime = newMovieForm["new-movie-runtime"].value;
    let newMovieRating = newMovieForm["new-movie-rating"].value;
    let newMovieYear = newMovieForm["new-movie-year"].value;

    /* Check the new movie title, we don't want duplicates */
    for (let i = 0; i < Object.keys(movieData).length; i++) {
        let title = Object.entries(movieData)[i][0];
        if (newMovieTitle === title) {
            alert("Movie already exists with this title!");
        }
    }

    /* Check if the runtime is a positive number */
    if (isNaN(newMovieRuntime) == true) {
        alert("Runtime must be a number!");
        return;
    } else {
        if (newMovieRuntime <= 0) {
            alert("Runtime must be a positive number!");
            return;
        }
    }

    /* Check if the rating is a number and between 0 and 10 (both inclusive)*/
    if (isNaN(newMovieRating) == true) {
        alert("Rating must be a number!");
        return;
    } else {
        if (newMovieRating < 0 || newMovieRating > 10) {
            alert("Rating must be between 0 and 10 (both inclusive)!");
            return;
        }
    }

    /* Check if the year is a positive number */
    if (isNaN(newMovieYear) == true) {
        alert("Year must be a number!");
        return;        
    } else {
        if (newMovieYear <= 0) {
            alert("Year must be a positive number!");
            return;
        }
    }
    
    /* Create a movie object and assign to the movieData */    
    let movie = { [newMovieTitle]: {
        plot: newMoviePlot,
        cast: newMovieCast,
        runtime: newMovieRuntime,
        rating: newMovieRating,
        year: newMovieYear,
    }};

    /* Assign the new movie to the movieData */
    Object.assign(movieData, movie);

    /* Refresh the movie list */
    showMovies();
}

function deleteMovie(caller) {
    /* Find the movie title */
    let movieCardElement = caller.parentElement.parentElement;
    let movieTitleElement = movieCardElement.querySelector(".movie-title");
    let movieTitleToDelete = movieTitleElement.querySelector("h2").innerText;

    /* Loop through the movies and add them to an array but ignore the movie what we want to delete */
    let movieArr = [];
    for (let i = 0; i < Object.keys(movieData).length; i++) {
        let title = Object.keys(movieData)[i];

        if (movieTitleToDelete !== title) {
            movieArr.push(getMovieByTitle(title));
        }
    }

    /* Set the new movieData from the array */
    movieData = Object.fromEntries(movieArr);

    /* Refresh the movie list */
    showMovies();
}