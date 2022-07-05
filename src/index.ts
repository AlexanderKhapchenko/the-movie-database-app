import { createEventListeners } from "./helpers/createEventListeners";
import { PopularPage } from "./helpers/handlers";

export async function render(): Promise<void> {
	PopularPage();
	createEventListeners();
}
