import { MovieApiPath } from "../enums/movie-api-path";
import { IMovieResult, IMoviesResponse, IParams } from "../interfaces/interfaces";

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

export const getPopular = async (page = 1): Promise<IMovieResult[]> => {
	const params = {
		api_key: API_KEY,
		page
	}

	const { results }  = await fetchRequest<IMoviesResponse>(
		`${API_URL + MovieApiPath.popular}`, 
		params
	);

	return results;
}

export const getRated = async (page = 1): Promise<IMovieResult[]> => {
	const params = {
		api_key: API_KEY,
		page
	}

	const { results } = await fetchRequest<IMoviesResponse>(
		`${API_URL + MovieApiPath.rated}`, 
		params
	);

	return results;
}

export const getUpcoming = async (page = 1): Promise<IMovieResult[]> => {
	const params = {
		api_key: API_KEY,
		page
	}

	const { results } = await fetchRequest<IMoviesResponse>(
		`${API_URL + MovieApiPath.upcoming}`, 
		params
	);

	return results;
}

export const getByName = async (searchKey: string): Promise<IMovieResult[]> => {
	const params = {
		api_key: API_KEY,
		query: searchKey
	}

	const { results } = await fetchRequest<IMoviesResponse>(
		`${API_URL + MovieApiPath.search}`, 
		params
	);

	return results;
}

const fetchRequest = async <T>(url: string, params: IParams): Promise<T> => {
	const formattedParams = Object.entries(params)
		.map(([key, value]) => `${key}=${value}`)
		.join('&');

	const response = await fetch(`${url}?${formattedParams}`);
  const result = await response.json();
	
	return result;
}
