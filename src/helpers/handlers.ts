import { getPopular, getRated, getUpcoming, getByName } from "../api"
import { getFormattedMovie } from "./mapper";
import { IFillPageProps, IPage } from "../interfaces";
import { Banner, MovieList } from "../components";

let state: IPage = {
	currentType: "popular",
	currentPage: 1
};

const setState = (currentState: IPage, fieldsToUpdate: Partial<IPage>) => {
	state = {
		...currentState,
		...fieldsToUpdate
	}
}

const pageType = {
	popular: getPopular,
	rated: getRated,
	upcoming: getUpcoming,
	search: getByName,
}

export const FillPage = async ({ page, isLoadMore = false }: IFillPageProps): Promise<void> => {
	const { currentType: currentPage } = state;

	let result;

	if (currentPage == "search") {
		result = await pageType[currentPage](state.searchKey as string);
	}
	else {
		result = await pageType[currentPage](page);
	}

	const {results, total_pages } = result;

	setState(state, {
		totalPage: total_pages
	});

	const movies = getFormattedMovie(results);
	MovieList(movies, isLoadMore);
	Banner(movies);
}

export const PopularPage = async (page = 1): Promise<void> => {
	setState(state, {
		currentType: "popular",
		currentPage: page
	});

	FillPage({page});
}

export const RatedPage = async (page = 1): Promise<void> => {
	setState(state, {
		currentType: "rated",
		currentPage: page
	});

	FillPage({page});
}

export const UpcomingPage = async (page = 1): Promise<void> => {
	setState(state, {
		currentType: "upcoming",
		currentPage: page
	});

	FillPage({page});
}

export const SearchPage = async (searchKey: string): Promise<void> => {
	setState(state, {
		currentType: "search",
		searchKey
	});

	FillPage({searchKey});
}

export const LoadMore = async (page = 1): Promise<void> => {
	const { totalPage, currentPage, searchKey } = state;
	const isLoadMore = totalPage !== currentPage;
	page = isLoadMore ? currentPage + 1 : currentPage;

	setState(state, {
		currentPage: page,
		searchKey
	})

	isLoadMore && FillPage({ page, isLoadMore });
}
