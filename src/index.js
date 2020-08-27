import * as PIXI from 'pixi.js';

const app = new PIXI.Application({ backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

app.loader
    .add('TestFont', './TestFont.fnt')
    .load(onAssetsLoaded);

function onAssetsLoaded() {
    const bitmapFontText = new PIXI.BitmapText('bitmap fonts are supported!\nWoo yay!', { font: 'TestFont', align: 'left' });

    bitmapFontText.x = 50;
    bitmapFontText.y = 200;

    app.stage.addChild(bitmapFontText);
}
