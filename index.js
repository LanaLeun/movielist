const movieName = document.getElementById('movieName');
const moviePoster = document.getElementById('moviePoster');
const addMovie = document.getElementById('addMovie');

const movieTitles = [
    'Леди баг и Супер кот',
    'Смешарики',
    'Зверополис',
];
const moviePosters = [
    'covers/1.jpg',
    'covers/2.jpg',
    'covers/3.jpg',
];
const movieList = document.getElementById('movieList');

function renderMovies() {
    movieList.innerHTML = '';

    movieTitles.forEach((movieTitle, index) => {
        const item = document.createElement('li');

        const poster = document.createElement('img');
        poster.src = moviePosters[index];
        poster.alt = '';
        poster.width = 64;

        const title = document.createElement('span');
        title.textContent = movieTitle;

        item.append(poster, title);
        movieList.append(item);
    });
}
renderMovies();
addMovie.addEventListener('click', () => {
    const movieName = movieName.value
    const moviePoster = moviePoster.value
    if (movieName === "" || moviePoster === "") {
        return
    } else {
        movieTitles.push(movieName);
        moviePosters.push(moviePoster);
    }
})

