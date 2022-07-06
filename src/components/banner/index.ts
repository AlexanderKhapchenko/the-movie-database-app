import { IMovie } from "../../interfaces";

export const Banner = (movies: IMovie[]): void => {
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
