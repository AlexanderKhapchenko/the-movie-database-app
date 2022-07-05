import { PopularPage } from "./helpers/handlers";

export async function render(): Promise<void> {
	await PopularPage();
}
