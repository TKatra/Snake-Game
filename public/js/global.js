//Pixi Aliases
var Container = PIXI.Container;
var autoDetectRenderer = PIXI.autoDetectRenderer;
var Graphics = PIXI.Graphics;
var loader = PIXI.loader;
var resources = PIXI.loader.resources;
var TextureCache = PIXI.utils.TextureCache;
var Texture = PIXI.Texture;
var Sprite = PIXI.Sprite;

//Foundation
var gameArea;
var renderer;
var state;
var currentState;

//Containers
var stage = new Container();
var stageBackground = new Container();
var startScreen = new Container();
var gameOverScreen = new Container();

//Graphics
var spriteSheet;
var startImage;
var gameOverImage;

//Player Snake
var playerSnake;
var playerSpeed = 5;
var playerTail = [];
var playerMaxLength = 5;
var tailFrameTick = 0;

//Food
var food;
var foodMargin = 25;
var maxFoodX;
var maxFoodY;

//Points
var highScore = 1500;
var points;

//Borders
var topBorder;
var leftBorder;
var rightBorder;
var bottomBorder;

//controls
var left;
var right;