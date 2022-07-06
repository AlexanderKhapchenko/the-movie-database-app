import { IMovieResult } from "./movie-result";

export interface IMoviesResponse {
	page: number;
	results: IMovieResult[];
	total_pages: number;
	total_results: number;
}