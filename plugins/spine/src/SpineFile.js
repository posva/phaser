/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

var Class = require('../../../src/utils/Class');
var GetFastValue = require('../../../src/utils/object/GetFastValue');
var ImageFile = require('../../../src/loader/filetypes/ImageFile.js');
var IsPlainObject = require('../../../src/utils/object/IsPlainObject');
var JSONFile = require('../../../src/loader/filetypes/JSONFile.js');
var MultiFile = require('../../../src/loader/MultiFile.js');
var TextFile = require('../../../src/loader/filetypes/TextFile.js');

/**
 * @typedef {object} Phaser.Loader.FileTypes.SpineFileConfig
 *
 * @property {string} key - The key of the file. Must be unique within both the Loader and the Texture Manager.
 * @property {string} [textureURL] - The absolute or relative URL to load the texture image file from.
 * @property {string} [textureExtension='png'] - The default file extension to use for the image texture if no url is provided.
 * @property {XHRSettingsObject} [textureXhrSettings] - Extra XHR Settings specifically for the texture image file.
 * @property {string} [normalMap] - The filename of an associated normal map. It uses the same path and url to load as the texture image.
 * @property {string} [atlasURL] - The absolute or relative URL to load the atlas data file from.
 * @property {string} [atlasExtension='txt'] - The default file extension to use for the atlas data if no url is provided.
 * @property {XHRSettingsObject} [atlasXhrSettings] - Extra XHR Settings specifically for the atlas data file.
 */

/**
 * @classdesc
 * A Spine File suitable for loading by the Loader.
 *
 * These are created when you use the Phaser.Loader.LoaderPlugin#spine method and are not typically created directly.
 * 
 * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#spine.
 *
 * @class SpineFile
 * @extends Phaser.Loader.MultiFile
 * @memberof Phaser.Loader.FileTypes
 * @constructor
 *
 * @param {Phaser.Loader.LoaderPlugin} loader - A reference to the Loader that is responsible for this file.
 * @param {(string|Phaser.Loader.FileTypes.UnityAtlasFileConfig)} key - The key to use for this file, or a file configuration object.
 * @param {string|string[]} [textureURL] - The absolute or relative URL to load the texture image file from. If undefined or `null` it will be set to `<key>.png`, i.e. if `key` was "alien" then the URL will be "alien.png".
 * @param {string} [atlasURL] - The absolute or relative URL to load the texture atlas data file from. If undefined or `null` it will be set to `<key>.txt`, i.e. if `key` was "alien" then the URL will be "alien.txt".
 * @param {XHRSettingsObject} [textureXhrSettings] - An XHR Settings configuration object for the atlas image file. Used in replacement of the Loaders default XHR Settings.
 * @param {XHRSettingsObject} [atlasXhrSettings] - An XHR Settings configuration object for the atlas data file. Used in replacement of the Loaders default XHR Settings.
 */
var SpineFile = new Class({

    Extends: MultiFile,

    initialize:

    function SpineFile (loader, key, jsonURL, atlasURL, jsonXhrSettings, atlasXhrSettings)
    {
        var i;
        var json;
        var atlas;
        var files = [];
        var cache = loader.cacheManager.custom.spine;

        //  atlas can be an array of atlas files, not just a single one

        if (IsPlainObject(key))
        {
            var config = key;

            key = GetFastValue(config, 'key');

            json = new JSONFile(loader, {
                key: key,
                url: GetFastValue(config, 'jsonURL'),
                extension: GetFastValue(config, 'jsonExtension', 'json'),
                xhrSettings: GetFastValue(config, 'jsonXhrSettings')
            });

            atlasURL = GetFastValue(config, 'atlasURL');

            if (Array.isArray(atlasURL))
            {
                for (i = 0; i < atlasURL.length; i++)
                {
                    atlas = new TextFile(loader, {
                        key: key,
                        url: atlasURL[i],
                        extension: GetFastValue(config, 'atlasExtension', 'atlas'),
                        xhrSettings: GetFastValue(config, 'atlasXhrSettings')
                    });

                    files.push(atlas);
                }
            }
            else
            {
                atlas = new TextFile(loader, {
                    key: key,
                    url: atlasURL,
                    extension: GetFastValue(config, 'atlasExtension', 'atlas'),
                    xhrSettings: GetFastValue(config, 'atlasXhrSettings')
                });

                files.push(atlas);
            }
        }
        else
        {
            json = new JSONFile(loader, key, jsonURL, jsonXhrSettings);

            if (Array.isArray(atlasURL))
            {
                for (i = 0; i < atlasURL.length; i++)
                {
                    atlas = new TextFile(loader, key + '_' + i, atlasURL[i], atlasXhrSettings);
                    atlas.cache = cache;

                    files.push(atlas);
                }
            }
            else
            {
                atlas = new TextFile(loader, key + '_0', atlasURL, atlasXhrSettings);
                atlas.cache = cache;

                files.push(atlas);
            }
        }

        files.unshift(json);

        MultiFile.call(this, loader, 'spine', key, files);
    },

    /**
     * Called by each File when it finishes loading.
     *
     * @method Phaser.Loader.MultiFile#onFileComplete
     * @since 3.7.0
     *
     * @param {Phaser.Loader.File} file - The File that has completed processing.
     */
    onFileComplete: function (file)
    {
        var index = this.files.indexOf(file);

        if (index !== -1)
        {
            this.pending--;

            if (file.type === 'text')
            {
                //  Inspect the data for the files to now load
                var content = file.data.split('\n');

                //  Extract the textures
                var textures = [];

                for (var t = 0; t < content.length; t++)
                {
                    var line = content[t];

                    if (line.trim() === '' && t < content.length - 1)
                    {
                        line = content[t + 1];

                        textures.push(line);
                    }
                }

                var config = this.config;
                var loader = this.loader;

                var currentBaseURL = loader.baseURL;
                var currentPath = loader.path;
                var currentPrefix = loader.prefix;

                var baseURL = GetFastValue(config, 'baseURL', currentBaseURL);
                var path = GetFastValue(config, 'path', currentPath);
                var prefix = GetFastValue(config, 'prefix', currentPrefix);
                var textureXhrSettings = GetFastValue(config, 'textureXhrSettings');

                loader.setBaseURL(baseURL);
                loader.setPath(path);
                loader.setPrefix(prefix);

                for (var i = 0; i < textures.length; i++)
                {
                    var textureURL = textures[i];

                    var key = '_SP_' + textureURL;

                    var image = new ImageFile(loader, key, textureURL, textureXhrSettings);

                    this.addToMultiFile(image);

                    loader.addFile(image);
                }

                //  Reset the loader settings
                loader.setBaseURL(currentBaseURL);
                loader.setPath(currentPath);
                loader.setPrefix(currentPrefix);
            }
        }
    },

    /**
     * Adds this file to its target cache upon successful loading and processing.
     *
     * @method Phaser.Loader.FileTypes.SpineFile#addToCache
     * @since 3.16.0
     */
    addToCache: function ()
    {
        if (this.isReadyToProcess())
        {
            var fileJSON = this.files[0];

            fileJSON.addToCache();

            var atlasCache;
            var atlasKey = '';
            var combinedAtlastData = '';

            for (var i = 1; i < this.files.length; i++)
            {
                var file = this.files[i];

                if (file.type === 'text')
                {
                    atlasKey = file.key.substr(0, file.key.length - 2);

                    atlasCache = file.cache;

                    combinedAtlastData = combinedAtlastData.concat(file.data);
                }
                else
                {
                    var key = file.key.substr(4).trim();
   
                    this.loader.textureManager.addImage(key, file.data);
                }

                file.pendingDestroy();
            }

            atlasCache.add(atlasKey, combinedAtlastData);

            this.complete = true;
        }
    }

});

module.exports = SpineFile;
