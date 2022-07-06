import { getById } from "../../api";
import { getFormattedMovie } from "../../helpers/mapper";
import { IMovie } from "../../interfaces";
import { MovieCard } from "../movie-card";

const favoriteMovie: IMovie[] = [];

export const removeFavoriteMovies = (id: number): void => {
	const index = favoriteMovie.findIndex(movie => movie.id === id);
	favoriteMovie.splice(index, 1);
}

export const addFavoriteMovies = async (id: string): Promise<void> => {
	const result = await getById(id);
	const movieList = getFormattedMovie([result]);
	favoriteMovie.push(...movieList);
}

export const createFavoriteMovies = async (): Promise<void> => {
	const favoriteIds = [];
	
	for (const key of Object.keys(localStorage)) {
		if (localStorage.getItem(key) === 'like') {
			favoriteIds.push(key);
		}
 	}

	const result = await Promise.all(
		favoriteIds
		.filter(id => 
			!favoriteMovie
			.some(e => e.id.toString() === id))
		.map(id => getById(id)));
	
	const movieList = getFormattedMovie(result);
	favoriteMovie.push(...movieList);
	
	renderFavoriteMovie(favoriteMovie);
}

export const renderFavoriteMovie = (list: IMovie[]): void => {
	const filmContainer = document.getElementById("favorite-movies");

	const movies = list.map(movie => MovieCard(movie, true));
	if (filmContainer) {
		filmContainer.innerHTML = "";
		filmContainer.append(...movies);
	}
}
