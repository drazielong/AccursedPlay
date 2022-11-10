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
        this.borderScene = this.scene.get("Borders");

        //items
        this.rope = this.add.image(790, 670, 'rope');
        this.rope.setDisplaySize(70, 70);
        this.rope.setInteractive({
           cursor: handPointer
        });

        this.rope.isCursor = false;

        this.rope.on('pointerup', (pointer) => {
            interText.text = "A fairly long rope.";
            this.input.setDefaultCursor('url(./assets/itemCursors/rope.png), pointer');
            this.rope.isCursor = true;
            clickedOut = false;
        }); 

        //interactables
        this.int1 = this.add.image(70, 400, 'hitbox1');
        this.int1.setInteractive({
            cursor: handPointer
         });

        //clicking correct object destroys object
        this.int1.on('pointerdown', (pointer) => {
            if ((this.rope.isCursor)) {
                this.input.setDefaultCursor(handDefault);
                this.rope.destroy();
                interText.text = "congrats you used the rope correctly yayyyy";
                this.rope.isCursor = false;
                clickedOut = false;
            }
            else interText.text = "I need a rope to complete this puzzle.";
        });

        this.int2 = this.add.image(700, 150, 'hitbox1');
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

        this.int3 = this.add.image(600, 200, 'hitbox1');
        this.int3.setInteractive({
            cursor: handPointer
         });

        this.int3.on('pointerdown', (pointer) => {
            if ((this.input.mouse.manager.defaultCursor != handDefault)) {
                this.input.setDefaultCursor(handDefault);
            }
            this.scene.switch('macdeath');
            prevScene = 'macdeath';
        });
    }

    update() {
        if (this.rope.isCursor) {
            this.borderScene.clickedOutCheck(this.rope); 
            if (clickedOut) {
                this.input.setDefaultCursor(handDefault);
                interText.text = "Can't use this here."; 
                this.rope.isCursor = false;
            }
        }
    }
}
