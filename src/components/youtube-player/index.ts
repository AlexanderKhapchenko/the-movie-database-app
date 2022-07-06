import { getVideoById } from "../../api";

export const YoutubePlayer = async (id: number): Promise<void> => {

	const results = await getVideoById(id);
	const trailer = results.length ? results.find(vid => vid.name === 'Official Trailer') : { key: 'xkfrrkqlKGE' };
	const key = trailer ? trailer.key : results[0].key;

	const youtubeContainer = document.getElementById('youtube-container');

	const youtube = `
		<iframe 
			class="youtube" 
			width="560" 
			height="315" 
			src="https://www.youtube.com/embed/${key}" 
			title="YouTube video player" 
			frameborder="0" 
			allow=
				"accelerometer; 
				autoplay; 
				clipboard-write; 
				encrypted-media; 
				gyroscope; 
				picture-in-picture" 
			allowfullscreen
		>
		</iframe>
	`

	youtubeContainer && (youtubeContainer.innerHTML = youtube);
}
