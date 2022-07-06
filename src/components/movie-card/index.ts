import { IMovie } from "../../interfaces";
import { addFavoriteMovies, removeFavoriteMovies } from "../favorite-movies";

export const MovieCard = ({id, posterPath, overview, releaseDate}: IMovie, inFavoriteList = false): HTMLElement => {
	const API_IMAGE = process.env.API_IMAGE;
	const fullHeart = 'red';
	const emptyHeart = '#ff000078';

	const movieCard = document.createElement('div');
	const classes = inFavoriteList ? 'col-12 p-2'.split(' ') : 'col-lg-3 col-md-4 col-12 p-2'.split(' ');
	movieCard.classList.add(...classes);

	const isLiked = localStorage.getItem(id.toString());

	movieCard.innerHTML = `
		<div class="card shadow-sm">
			<img src="${API_IMAGE + posterPath}">
			<svg 
				movie-id="${id}"
				is-liked="${isLiked ? 'true' : 'false'}"
				xmlns="http://www.w3.org/2000/svg" 
				stroke="red" 
				fill="${isLiked ? fullHeart : emptyHeart}" 
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
	const likeButton = movieCard.querySelector('svg') as SVGSVGElement;
	likeButton.onclick = () => {
		toggleLike(likeButton);
		inFavoriteList && checkSimilarFilm(id);
	};
	
	const checkSimilarFilm = (id: number): void => {
		const movie = document.querySelector(`#film-container svg[movie-id="${id}"]`);
		movie && toggleLike(movie);
	}

	const toggleLike = (element: Element) => {
		if (element.getAttribute('is-liked') === 'true') {
			element.setAttribute('is-liked', 'false');
			element.setAttribute('fill', emptyHeart);

			if (!inFavoriteList) {
				localStorage.removeItem(id.toString());
				removeFavoriteMovies(id);
			}
		}
		else {
			element.setAttribute('is-liked', 'true');
			element.setAttribute('fill', fullHeart);

			if (!inFavoriteList) {
				localStorage.setItem(id.toString(), 'like');
				addFavoriteMovies(id.toString());
			}
		}
	}

	return movieCard;
}
