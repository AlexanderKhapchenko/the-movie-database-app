import { getPopular, getRated, getUpcoming, getByName } from "../api/api"
import { getFormattedMovie } from "./mapper";
import { renderMovieList } from "./html/renderers";
import { IFillPageProps, IPage } from "../interfaces/interfaces";

const state: IPage = {
	currentPage: "popular"
};

const pageType = {
	popular: getPopular,
	rated: getRated,
	upcoming: getUpcoming,
	search: getByName,
}

export const FillPage = async ({ page, searchKey }: IFillPageProps): Promise<void> => {
	const { currentPage } = state;

	let result;

	if (currentPage == "search") {
		result = await pageType[currentPage](searchKey as string);
	}
	else {
		result = await pageType[currentPage](page);
	}

	const movies = getFormattedMovie(result);
	renderMovieList(movies);
}

export const PopularPage = async (page = 1): Promise<void> => {
	state.currentPage = "popular";
	await FillPage({page});
}

export const RatedPage = async (page = 1): Promise<void> => {
	state.currentPage = "rated";
	await FillPage({page});
}

export const UpcomingPage = async (page = 1): Promise<void> => {
	state.currentPage = "upcoming";
	await FillPage({page});
}

export const SearchPage = async (searchKey: string): Promise<void> => {
	state.currentPage = "search";
	await FillPage({searchKey});
}
