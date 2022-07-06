import { MovieApiPath } from "../enums";
import { IMovieResult, IMoviesResponse, IMovieVideos, IMovieVideo, IParams } from "../interfaces";
import { ApiReturnedValue } from "../types/api-returned-value";

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY

export const getPopular = async (page = 1): Promise<ApiReturnedValue> => {
	const params = {
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
		query: searchKey
	}

	const { results, total_pages } = await fetchRequest<IMoviesResponse>(
		`${API_URL + MovieApiPath.search}`, 
		params
	);

	return { results, total_pages };
}

export const getById = async (id: string): Promise<IMovieResult> => {
	const results  = await fetchRequest<IMovieResult>(
		`${API_URL + MovieApiPath.details}/${id}`
	);

	return results;
}

export const getVideoById = async(id: string): Promise<IMovieVideo[]> => {
	const {results}  = await fetchRequest<IMovieVideos>(
		`${API_URL + MovieApiPath.details}/${id}/videos`,
	);

	return results;
}

const fetchRequest = async <T>(url: string, params?: Partial<IParams>): Promise<T> => {
	const formattedParams = Object.entries({...params, api_key: API_KEY})
		.map(([key, value]) => `${key}=${value}`)
		.join('&');

	const response = await fetch(`${url}?${formattedParams}`);
  const result = await response.json();
	
	return result;
}
