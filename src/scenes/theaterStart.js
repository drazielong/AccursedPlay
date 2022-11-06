class theaterStart extends Phaser.Scene {
    constructor() {
        super("theaterStart");
    }

    preload() {
        // load assets
        this.load.image('start', './assets/testBG.png');
        this.load.image('rope', './assets/items/rope.png');
        this.load.image('amulet', './assets/items/amulet.png');
        this.load.image('knife', './assets/items/knife.png');
        this.load.image('maskSad', './assets/items/maskSad.png');
        this.load.image('maskHappy', './assets/items/maskHappy.png');
    }

    create() {
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        prevScene = this.scene.key;
    
        //bg
        this.title = this.add.image(10, 10, 'start').setOrigin(0, 0);

        //UI
        this.scene.run('Borders');

        //interactables
        this.int1 = this.add.image(70, 400, 'hitbox');
        this.int1.setInteractive({
            cursor: handPointer
         });

        //clicking correct object destroys object
        this.int1.on('pointerdown', (pointer) => {
            if ((this.input.mouse.manager.defaultCursor == 'url(./assets/itemCursors/rope.png), pointer')) {
                this.input.setDefaultCursor(handDefault);
                this.rope.destroy();
                interText.text = "congrats you used the rope correctly yayyyy";
                clickedOut = false;
            }
            else interText.text = "I need a rope to complete this puzzle.";
        });

        this.int2 = this.add.image(700, 150, 'hitbox');
        this.int2.setInteractive({
            cursor: handPointer
         });

        this.int2.on('pointerdown', (pointer) => {
            if ((this.input.mouse.manager.defaultCursor != handDefault)) {
                this.input.setDefaultCursor(handDefault);
            }
            this.scene.switch('shockAlock');
            prevScene = 'shockAlock';
        });

        //items
        //note: i would rather have these be square instead of rectangular for the cursors
        //note note: if ur able to collect up to 5 objects, in a perfect world they would enter the inv in order
        //this means i would have some kind of array for each "slot" which are the x and y coordinates and check if an item is there already
        //if so, move to second slot and so on
        //for the purposes of this demo I will predetermine item placement like lighthouse
        this.rope = this.add.image(710, 670, 'rope');
        this.rope.setDisplaySize(100, 80);
        this.rope.setInteractive({
           cursor: handPointer
        });

        this.rope.on('pointerup', (pointer) => {
            interText.text = "A fairly long rope.";
            this.input.setDefaultCursor('url(./assets/itemCursors/rope.png), pointer');
            clickedOut = false;
        }); 
    }
}
