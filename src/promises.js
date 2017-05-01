let input = document.getElementById('input');
let movieList = document.getElementById('movies');

function deleteMovies() {
    while (movieList.firstElementChild) {
        movieList.removeChild(movieList.firstElementChild);
    }
}

function addMovieToList(movie) {
    let img = document.createElement('img');
    img.src = movie.Poster;
    movieList.appendChild(img);
}

function getData(url, done) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
        if (xhr.status === 200) {
            let json = JSON.parse(xhr.response);
            console.log(json);
            done(json.Search);
        } else {
            console.error(xhr.statusText);
        }
    };

    xhr.onerror = function (error) {
        console.error(error);
    };

    xhr.send();
}

input.addEventListener('input', (e) => {
    let search = e.target.value;

    getData(`http://omdbapi.com/?s=${search}`, (movies = []) => {
        deleteMovies();

        movies.forEach((movie) => {
            addMovieToList(movie);
        });
    });
});