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
var stageBackground = new Container();
var startScreen = new Container();
var gameOverScreen = new Container();
var gameOverImage;

//Gameplay
var playerSnake;
var playerSpeed = 5;
var playerTail = [];
var playerMaxLength = 5;
var tailFrameTick = 0;

var food;
var foodMargin = 25;
var maxFoodX;
var maxFoodY;
var highScore = 1500;
var points;

var topBorder;
var leftBorder;
var rightBorder;
var bottomBorder;

//controls
var left;
var right;