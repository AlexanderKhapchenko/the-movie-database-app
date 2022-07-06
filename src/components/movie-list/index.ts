import { IMovie } from "../../interfaces";
import { MovieCard } from "../movie-card";

export const MovieList = (movies: IMovie[], isLoadMore = false): void => {
	const filmContainer = document.getElementById("film-container");

	const newMovies = movies.map(movie => MovieCard(movie));

	if (filmContainer) {

		if (!isLoadMore) {
			filmContainer.innerHTML = "";
		}

		filmContainer.append(...newMovies);
	}
}
