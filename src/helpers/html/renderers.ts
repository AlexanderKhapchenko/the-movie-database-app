import { IMovie } from "../../interfaces/interfaces";
import { createMovieCard } from "./createMovieCard";

export const renderMovieList = (movies: IMovie[]): void => {
	const filmContainer = document.getElementById("film-container");

	filmContainer && (filmContainer.innerHTML = movies.map(movie => createMovieCard(movie)).join(''));
}
