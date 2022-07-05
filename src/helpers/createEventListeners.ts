import { PopularPage } from "./handlers";

export const createEventListeners = async (): Promise<void> => {
	const popularBtn = document.getElementById("popular");
	popularBtn && (popularBtn.onclick = () => PopularPage());
}
