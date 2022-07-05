import { IMoviesResponse } from "../interfaces/interfaces";

export type ApiReturnedValue = Omit<IMoviesResponse, "total_results" | "page">