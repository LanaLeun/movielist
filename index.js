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

        const delet = document.createElement('button');
        delet.textContent = "Удалить";

        item.append(poster, title, delet);
        movieList.append(item);

        delet.addEventListener('click', () => {
            movieTitles.splice(index, 1)
            moviePosters.splice(index, 1)
            renderMovies();
        })
    });

}
renderMovies()

addMovie.addEventListener('click', () => {
    const Name = movieName.value.trim()
    const Poster = moviePoster.value.trim()
    if (Name === "" || Poster === "") {
        return
    } else {
        movieTitles.push(Name);
        moviePosters.push(Poster);

    }
    renderMovies();
})

