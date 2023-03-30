const searchInput = document.getElementById('searchBox');
let movies = ['Joker 2019', 'Batman Arkham night', 'Mario 2023', 'The Batman', 'Cukur', 'The Boys', 'Supergirl', 'Superman & Batman', 'Joker 2022', 'Capitan America'];

function searchMovie() {
    const movieContainer = document.querySelector('.movies-boxes');
    const searchVal = searchInput.value || 'Empty';
    let searchMovieResult = [];

    if (searchVal === 'Empty') {
        movieContainer.innerHTML === ''
        createMovieElement(movies, movieContainer);
    } else {
        movieContainer.innerHTML = '';
        searchMovieResult = movies.filter(movie => {
            let s;
            for (let i = 0; i < searchVal.length; i++) {
                if (searchVal[i] === movie[i]) {
                  s = movie;  
                } else if (searchVal === movie) {
                    return movie;
                } else {
                    s = null;
                    break;
                }
            }

            return s ?? false;
        });

    }

    if (searchMovieResult.length !== 0) {
        createMovieElement(searchMovieResult, movieContainer);
    }
}

function createMovieElement(searchArr, root) {
    searchArr.forEach(movie => {
        const divContainer = document.createElement('div');
        divContainer.classList.add('movie');
        root.appendChild(divContainer);

        const movieTitle = document.createElement('h1');
        movieTitle.classList.add('title');
        movieTitle.textContent = movie;
        divContainer.appendChild(movieTitle);
    });
}

searchInput.addEventListener('input', searchMovie);