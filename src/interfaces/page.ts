export interface IPage {
	currentType: "popular" | "rated" | "upcoming" | "search";
	currentPage: number;
	totalPage?: number;
	searchKey?: string;
}