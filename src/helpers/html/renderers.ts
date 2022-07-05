import { IMovie } from "../../interfaces/interfaces";
import { createMovieCard } from "./createMovieCard";

export const renderMovieList = (movies: IMovie[], isLoadMore = false): void => {
	const filmContainer = document.getElementById("film-container");

	if (filmContainer) {
		if (isLoadMore) {
			filmContainer.innerHTML += movies.map(movie => createMovieCard(movie)).join('');
		}
		else {
			filmContainer.innerHTML = movies.map(movie => createMovieCard(movie)).join('');
		}
	}
}
