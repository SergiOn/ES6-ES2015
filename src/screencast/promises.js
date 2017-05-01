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


function go(num) {
    return new Promise((resolve, reject) => {
        let delay = Math.ceil(Math.random() * 3000);
        console.log(num, delay);
        setTimeout(() => {
            if (delay > 2000) {
                reject(num);
            }
            resolve(num);
        }, delay);
    });
}

let p1 = go(1);
let p2 = go(2);
let p3 = go(3);

p1.then((a) => console.log(a));
p2.then((a) => console.log(a));
p3.then((a) => console.log(a));

Promise.all([p1, p2, p3])
    .then((a) => console.log(a))
    .catch((error) => console.error(error));

Promise.race([p1, p2, p3])
    .then((a) => console.log(a))
    .catch((error) => console.error(error));


let batman = getData(`http://omdbapi.com/?s=batman`);
let superman = getData(`http://omdbapi.com/?s=superman`);

// batman.then((movies = []) => {
//         movies.forEach((movie) => {
//             addMovieToList(movie);
//         });
//     })
//     .catch((error) => console.error(error));
//
// superman.then((movies = []) => {
//         movies.forEach((movie) => {
//             addMovieToList(movie);
//         });
//     })
//     .catch((error) => console.error(error));

Promise.race([batman, superman])
    .then((movies = []) => {
        movies.forEach((movie) => {
            addMovieToList(movie);
        });
    })
    .catch((error) => console.error(error));