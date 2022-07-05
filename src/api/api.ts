import { MovieApiPath } from "../enums/movie-api-path";
import { IMovieResult, IMoviesResponse, IParams } from "../interfaces/interfaces";
import { ApiReturnedValue } from "../types/api-returned-value";

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY

export const getPopular = async (page = 1): Promise<ApiReturnedValue> => {
	const params = {
		api_key: API_KEY,
		page
	}

	const { results, total_pages }  = await fetchRequest<IMoviesResponse>(
		`${API_URL + MovieApiPath.popular}`, 
		params
	);

	return { results, total_pages };
}

export const getRated = async (page = 1): Promise<ApiReturnedValue> => {
	const params = {
		api_key: API_KEY,
		page
	}

	const { results, total_pages } = await fetchRequest<IMoviesResponse>(
		`${API_URL + MovieApiPath.rated}`, 
		params
	);

	return { results, total_pages };
}

export const getUpcoming = async (page = 1): Promise<ApiReturnedValue> => {
	const params = {
		api_key: API_KEY,
		page
	}

	const { results, total_pages } = await fetchRequest<IMoviesResponse>(
		`${API_URL + MovieApiPath.upcoming}`, 
		params
	);

	return { results, total_pages };
}

export const getByName = async (searchKey: string): Promise<ApiReturnedValue> => {
	const params = {
		api_key: API_KEY,
		query: searchKey
	}

	const { results, total_pages } = await fetchRequest<IMoviesResponse>(
		`${API_URL + MovieApiPath.search}`, 
		params
	);

	return { results, total_pages };
}

export const getById = async (id: string): Promise<IMovieResult> => {
	const params = {
		api_key: API_KEY
	}

	const results  = await fetchRequest<IMovieResult>(
		`${API_URL + MovieApiPath.details}/${id}`, 
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
