import { createFavoriteMovies } from "./favoriteMovies";
import { PopularPage, UpcomingPage, RatedPage, SearchPage, LoadMore } from "./handlers";

export const createEventListeners = async (): Promise<void> => {
	const popularBtn = document.getElementById("popular");
	popularBtn && (popularBtn.onclick = () => PopularPage());

	const upcomingBtn = document.getElementById("upcoming");
	upcomingBtn && (upcomingBtn.onclick = () => UpcomingPage());

	const ratedBtn = document.getElementById("top_rated");
	ratedBtn && (ratedBtn.onclick = () => RatedPage());

	const search = document.querySelector("form");
	search && (search.onsubmit = (e) => {
		e.preventDefault();
		SearchPage(search.input.value);
	});

	const loadMoreBtn = document.getElementById("load-more");
	loadMoreBtn && (loadMoreBtn.onclick = () => LoadMore());

	const favoriteMoviesButton = document.getElementById("favorite-movies-btn");
	favoriteMoviesButton && (favoriteMoviesButton.onclick = () => createFavoriteMovies());
}
