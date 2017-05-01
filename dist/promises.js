'use strict';

var input = document.getElementById('input');
var movieList = document.getElementById('movies');

function deleteMovies() {
    while (movieList.firstElementChild) {
        movieList.removeChild(movieList.firstElementChild);
    }
}

function addMovieToList(movie) {
    var img = document.createElement('img');
    img.src = movie.Poster;
    movieList.appendChild(img);
}

function getData(url, done) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
        if (xhr.status === 200) {
            var json = JSON.parse(xhr.response);
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

input.addEventListener('input', function (e) {
    var search = e.target.value;

    getData('http://omdbapi.com/?s=' + search, function () {
        var movies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        deleteMovies();

        movies.forEach(function (movie) {
            addMovieToList(movie);
        });
    });
});