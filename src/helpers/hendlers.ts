import { getPopular } from "../api/api"
import { getFormattedMovie } from "./mapper";
import { renderMovieList } from "./html/renderers";

export const PopularPage = async (): Promise<void> => {
	const result = await getPopular();

	const movies = getFormattedMovie(result);

	renderMovieList(movies);
}
