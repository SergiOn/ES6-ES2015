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

function getData(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            if (xhr.status === 200) {
                let json = JSON.parse(xhr.response);
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

input.addEventListener('input', (e) => {
    let search = e.target.value;

    getData(`http://omdbapi.com/?s=${search}`)
        .then((movies = []) => {
            deleteMovies();

            movies.forEach((movie) => {
                addMovieToList(movie);
            });
        })
        .catch((error) => console.error(error));
});