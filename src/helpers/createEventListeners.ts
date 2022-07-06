import { createFavoriteMovies } from "../components";
import { PopularPage, UpcomingPage, RatedPage, SearchPage, LoadMore } from "./handlers";

export const createEventListeners = async (): Promise<void> => {
	const popularBtn = document.getElementById("popular");
	popularBtn && (popularBtn.onclick = () => {
		PopularPage();
		setIsPlayerVisible(false);
	});

	const upcomingBtn = document.getElementById("upcoming");
	upcomingBtn && (upcomingBtn.onclick = () => {
		UpcomingPage();
		setIsPlayerVisible(false);
	});

	const ratedBtn = document.getElementById("top_rated");
	ratedBtn && (ratedBtn.onclick = () => {
		RatedPage();
		setIsPlayerVisible(false);
	});

	const search = document.querySelector("form");
	search && (search.onsubmit = (e) => {
		e.preventDefault();
		SearchPage(search.input.value);
		setIsPlayerVisible(false);
	});

	const loadMoreBtn = document.getElementById("load-more");
	loadMoreBtn && (loadMoreBtn.onclick = () => {
		LoadMore();
		setIsPlayerVisible(false);
	});

	const favoriteMoviesButton = document.getElementById("favorite-movies-btn");
	favoriteMoviesButton && (favoriteMoviesButton.onclick = () => createFavoriteMovies());

	const play = document.getElementById('play');

	play && (play.onclick = () => {
		setIsPlayerVisible(true);
	});

	const youtubeContainer = document.getElementById('youtube-container');

	const setIsPlayerVisible = (isVisible: boolean) => {
		youtubeContainer?.setAttribute("plays", isVisible.toString());
	}
}
