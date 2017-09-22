// loadImage loads an image from a url.
export function loadImage(url) {
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(image);
        });
        image.src = url;
    });
}
// loadLevel loads a json level file from a url.
export function loadLevel(name) {
    return fetch(`/levels/${name}.json`)
        .then(r => r.json());
}
//# sourceMappingURL=loaders.js.map