let config = {
    type: Phaser.CANVAS,
    width: 1280,
    height: 720,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },  
    scene: [ startMenu, Borders, theaterStart, Inventory, shockAlock, macdeath, gameOver ],
  }

let game = new Phaser.Game(config);

//custom cursor
let handPointer = 'url(./assets/ghostCursors/Help.cur), pointer';
let handDefault = 'url(./assets/ghostCursors/Normal.cur), pointer';

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// global variables
let prevScene = '';
let HP = 500;
let prevHP = 500;
let Mana = 80;

//text
let interText;
let textTimer = 0;

//hotbar vars
let hotbar;
let hotbar1;
let hotbar2;
let hotbar3;
let hotbar4;

//click detection
let clickedOut = false;
let outlineList = [];
let cardList = [];