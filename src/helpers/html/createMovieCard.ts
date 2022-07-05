import { IMovie } from "../../interfaces/interfaces";

export const createMovieCard = ({id, posterPath, overview, releaseDate}: IMovie): HTMLElement => {
	const movieCard = document.createElement('div');
	movieCard.classList.add("col-lg-3", "col-md-4", "col-12", "p-2");

	movieCard.innerHTML = `
		<div class="card shadow-sm">
			<img src="https://image.tmdb.org/t/p/original/${posterPath}">
			<svg 
				movie-id="${id}"
				xmlns="http://www.w3.org/2000/svg" 
				stroke="red" 
				fill="red" 
				width="50" 
				height="50" 
				class="bi bi-heart-fill position-absolute p-2 like-button" 
				viewBox="0 -2 18 22">
					<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
			</svg>
			<div class="card-body">
				<p class="card-text truncate">
						${overview}
				</p>
				<div class="
						d-flex
						justify-content-between
						align-items-center
				">
					<small class="text-muted">${releaseDate}</small>
				</div>
			</div>
		</div>
	`

	return movieCard;
}
