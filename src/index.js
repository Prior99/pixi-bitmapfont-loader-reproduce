import * as PIXI from 'pixi.js';
import 'regenerator-runtime/runtime'

const app = new PIXI.Application({ backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

async function main() {
    const req = await fetch("./TestFont.fnt");
    console.log(req)
    const fnt = await req.text();
    const png = await new Promise(resolve => app.loader.add("./TestFont.png").load(result => {
        resolve(result.resources["./TestFont.png"]);
    }))
    console.log(png)
    PIXI.BitmapFont.install(fnt, png.texture);
    const bitmapFontText = new PIXI.BitmapText('012345', { font: 'TestFont', align: 'left' });

    bitmapFontText.x = 50;
    bitmapFontText.y = 200;

    app.stage.addChild(bitmapFontText);
}

main();