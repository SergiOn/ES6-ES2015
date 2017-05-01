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

function getData(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            if (xhr.status === 200) {
                var json = JSON.parse(xhr.response);
                console.log(json);
                resolve(json.Search);
            } else {
                reject(xhr.statusText);
            }
        };

        xhr.onerror = function (error) {
            reject(error);
        };

        xhr.send();
    });
}

input.addEventListener('input', function (e) {
    var search = e.target.value;

    getData('http://omdbapi.com/?s=' + search).then(function () {
        var movies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        deleteMovies();

        movies.forEach(function (movie) {
            addMovieToList(movie);
        });
    }).catch(function (error) {
        return console.error(error);
    });
});

function go(num) {
    return new Promise(function (resolve, reject) {
        var delay = Math.ceil(Math.random() * 3000);
        console.log(num, delay);
        setTimeout(function () {
            resolve(num);
        }, delay);
    });
}

var p1 = go(1);
var p2 = go(2);
var p3 = go(3);

p1.then(function (a) {
    return console.log(a);
});
p2.then(function (a) {
    return console.log(a);
});
p3.then(function (a) {
    return console.log(a);
});

Promise.all([p1, p2, p3]).then(function (a) {
    return console.log(a);
});