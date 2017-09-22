// levelData is the format for json level files.
export declare module levelData {
	export interface Background {
		tile: string;
		ranges: number[][];
	}

	export interface RootObject {
		backgrounds: Background[];
	}
}

// loadImage loads an image from a url.
export function loadImage(url: string): Promise<HTMLImageElement> {
	return new Promise(resolve => {
		const image = new Image();
		image.addEventListener('load', () => {
			resolve(image);
		});
		image.src = url;
	});
}

// loadLevel loads a json level file from a url.
export function loadLevel(name: string): Promise<any> {
	return fetch(`/levels/${name}.json`)
		.then(r => r.json());
}