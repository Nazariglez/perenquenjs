var ResourceLoader = require('resource-loader'),
    textureParser = require('./textureParser'),
    spritesheetParser = require('./spritesheetParser'),
    particleParser = require('./particleParser'),
    bitmapFontXMLParser = require('./bitmapFontXMLParser'),
    bitmapFontTXTParser = require('./bitmapFontTXTParser');

function AssetLoader(baseUrl, concurrency){
    ResourceLoader.call(this, baseUrl, concurrency);

    this.use(ResourceLoader.middleware.parsing.blob())
        .use(spritesheetParser())
        .use(textureParser())
        .use(bitmapFontXMLParser())
        .use(particleParser())
        .use(bitmapFontTXTParser());
}

AssetLoader.prototype = Object.create(ResourceLoader.prototype);
AssetLoader.prototype.constructor = AssetLoader;

module.exports = AssetLoader;