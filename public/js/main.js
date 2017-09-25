// This project is a recreated version of Super Mario written in TypeScript and converted JavaScript.
//
// The code is written by the YouTube creator Meth Meth Method
// in his "Writing Super Mario in Javascript" tutorial series.
// This is the source code for episode 1: https://youtu.be/g-FpDQ8Eqw8?list=PLS8HfBXv9ZWWe8zXrViYbIM2Hhylx8DZx
import Compositor from "./Compositor.js";
import { loadLevel } from "./loaders.js";
import { loadMarioSprite, loadBackgroundSprites } from "./sprites.js";
import { createBackgroundLayer } from "./layers.js";
const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');
function createSpriteLayer(sprite, pos) {
    return function drawSpriteLayer(context) {
        for (let i = 0; i < 20; ++i) {
            sprite.draw('idle', context, pos.x + i * 16, pos.y);
        }
    };
}
Promise.all([
    loadMarioSprite(),
    loadBackgroundSprites(),
    loadLevel('1-1'),
]).then(([marioSprite, backgroundSprites, level]) => {
    const comp = new Compositor();
    const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites);
    comp.layers.push(backgroundLayer);
    const pos = {
        x: 0,
        y: 0,
    };
    const spriteLayer = createSpriteLayer(marioSprite, pos);
    comp.layers.push(spriteLayer);
    function update() {
        comp.draw(context);
        pos.x += 2;
        pos.y += 2;
        requestAnimationFrame(update);
    }
    update();
});
//# sourceMappingURL=main.js.map