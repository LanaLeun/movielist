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
  addMovie.addEventListener('click', () => {
    
  })

  renderMovies();