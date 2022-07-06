import { IMovie } from "../interfaces/interfaces";
import { createMovieCard } from "../components/createMovieCard";

export const renderMovieList = (movies: IMovie[], isLoadMore = false): void => {
	const filmContainer = document.getElementById("film-container");

	const newMovies = movies.map(movie => createMovieCard(movie));

	if (filmContainer) {

		if (!isLoadMore) {
			filmContainer.innerHTML = "";
		}

		filmContainer.append(...newMovies);
	}
}

export const renderBanner = (movies: IMovie[]): void => {
	const API_IMAGE = process.env.API_IMAGE;

	const rand: number = Math.floor(Math.random() * movies.length);

	const randMovie = movies[rand];

	const title = document.getElementById('random-movie-name');
	title && (title.innerHTML = randMovie.title);

	const desc = document.getElementById('random-movie-description');
	desc && (desc.innerText = randMovie.overview);

	const bg = document.getElementById('random-movie');
	bg && (bg.style.backgroundImage = `url(${API_IMAGE + randMovie.backdropPath})`);
}
