// This project is a recreated version of Super Mario written in TypeScript and converted JavaScript.
//
// The code is written by the YouTube creator Meth Meth Method
// in his "Writing Super Mario in Javascript" tutorial series.

// This is the source code for episode 1: https://youtu.be/g-FpDQ8Eqw8?list=PLS8HfBXv9ZWWe8zXrViYbIM2Hhylx8DZx

import SpriteSheet from "./SpriteSheet.js";
import {loadImage, loadLevel, levelData} from "./loaders.js";

function drawBackground(background: levelData.Background, context: CanvasRenderingContext2D, sprites: SpriteSheet): void {
	background.ranges.forEach(([x1, x2, y1, y2]) => {
		for (let x = x1; x < x2; ++x) {
			for (let y = y1; y < y2; ++y) {
				sprites.drawTile(background.tile, context, x, y);
			}
		}
	});
}

const canvas = <HTMLCanvasElement> document.getElementById('screen');
const context = canvas.getContext('2d');

loadImage('/img/tiles.png')
	.then(image => {
		const sprites = new SpriteSheet(image, 16, 16);
		sprites.define('ground', 0, 0);
		sprites.define('sky', 3, 23);

		loadLevel('1-1')
			.then((level: levelData.RootObject) => {
				level.backgrounds.forEach((background: levelData.Background) => {
					drawBackground(background, context, sprites);
				});
			});
	});