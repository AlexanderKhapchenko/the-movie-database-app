import { PopularPage, UpcomingPage,RatedPage } from "./handlers";

export const createEventListeners = async (): Promise<void> => {
	const popularBtn = document.getElementById("popular");
	popularBtn && (popularBtn.onclick = () => PopularPage());

	const upcomingBtn = document.getElementById("upcoming");
	upcomingBtn && (upcomingBtn.onclick = () => UpcomingPage());

	const ratedBtn = document.getElementById("top_rated");
	ratedBtn && (ratedBtn.onclick = () => RatedPage());
}
