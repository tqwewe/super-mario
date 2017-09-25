import {levelData} from "./loaders.js";
import SpriteSheet from "./SpriteSheet.js";

function drawBackground(background: levelData.Background, context: CanvasRenderingContext2D, sprites: SpriteSheet): void {
	background.ranges.forEach(([x1, x2, y1, y2]) => {
		for (let x = x1; x < x2; ++x) {
			for (let y = y1; y < y2; ++y) {
				sprites.drawTile(background.tile, context, x, y);
			}
		}
	});
}

export function createBackgroundLayer(backgrounds: Array<levelData.Background>, sprites: SpriteSheet): Function {
	const buffer = document.createElement('canvas');
	buffer.width = 256;
	buffer.height = 240;
	backgrounds.forEach((background: levelData.Background) => {
		drawBackground(background, buffer.getContext('2d'), sprites);
	});

	return function drawBackgroundLayer(context) {
		context.drawImage(buffer, 0, 0);
	};
}