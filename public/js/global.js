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
var gameArea;
var renderer;
var stage = new Container();
var gameOver = new Container();

//Gameplay
var playerSnake;
var playerSpeed = 5;
var snok;
var topBorder;
var leftBorder;
var rightBorder;
var bottomBorder;

var rectangle;

//controls
var left;
var right;