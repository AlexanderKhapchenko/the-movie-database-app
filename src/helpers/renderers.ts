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
