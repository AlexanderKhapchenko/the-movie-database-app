import { IMoviesResponse } from "../interfaces";

export type ApiReturnedValue = Omit<IMoviesResponse, "total_results" | "page">