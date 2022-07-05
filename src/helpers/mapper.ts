import { IMovie, IMovieResult } from "../interfaces/interfaces";

export const getFormattedMovie = (raw: IMovieResult[]): IMovie[] => 
	raw.map(movie => {
		const {
			id, 
			title, 
			poster_path: posterPath, 
			backdrop_path: backdropPath, 
			overview, 
			release_date: releaseDate
		} = movie;
		
		return { id, title, posterPath, backdropPath, overview, releaseDate };
	});
