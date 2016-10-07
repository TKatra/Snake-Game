//Pixi Aliases
var Container = PIXI.Container;
var autoDetectRenderer = PIXI.autoDetectRenderer;
var Graphics = PIXI.Graphics;
var loader = PIXI.loader;
var resources = PIXI.loader.resources;
var TextureCache = PIXI.utils.TextureCache;
var Texture = PIXI.Texture;
var Sprite = PIXI.Sprite;
var spriteSheet;
var state;

//Foundation
var renderer = autoDetectRenderer(500, 300);
var stage = new Container();

//Gameplay
var playerSnake;
var playerSpeed = 5;
var snok;
var rectangle;

//controls
var left;
var right;