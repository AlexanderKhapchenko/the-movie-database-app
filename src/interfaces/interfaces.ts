export interface IMoviesResponse {
	page: number;
	results: IMovieResult[];
	total_pages: number;
	total_results: number;
}

export interface IMovieResult {
	poster_path: string | null;
	adult: boolean;
	overview: string;
	release_date: string;
	genre_ids: number[];
	id: number;
	original_title: string;
	original_language: string;
	title: string;
	backdrop_path: string | null;
	popularity: number;
	vote_count: number;
	video: boolean;
	vote_average: number;
};

export interface IMovie {
	posterPath: string | null;
	overview: string;
	releaseDate: string;
	id: number;
	title: string;
	backdropPath: string | null;
}

export interface IParams {
	api_key: string; 
	query?: string; 
	page?: number;
}
