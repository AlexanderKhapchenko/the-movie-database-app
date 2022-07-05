import { PopularPage, UpcomingPage } from "./handlers";

export const createEventListeners = async (): Promise<void> => {
	const popularBtn = document.getElementById("popular");
	popularBtn && (popularBtn.onclick = () => PopularPage());

	const upcomingBtn = document.getElementById("upcoming");
	upcomingBtn && (upcomingBtn.onclick = () => UpcomingPage());
}
