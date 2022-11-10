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

// reserve keyboard vars
let keySPACE, keyENTER, keyW, keyA, keyS, keyD, keyI, key1, key2, key3, key4, key5, key6, key7, key8, key9;

// global variables
let prevScene = '';
let HP = 500;
let prevHP = 500;
let Mana = 80;

//intro
let prevText;
let nextText;

//text
let interText;
let textTimer = 0;

//click detection
let clickedOut = false;
let emptySpace = false;
let outlineList = [];
let cardList = [];