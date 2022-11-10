class macdeath extends Phaser.Scene {
    constructor() {
        super("macdeath");
    }

    preload() {
        this.load.image('bg', './assets/puzzles/macdeath/macdeathbg.png');
        this.load.image('bg1', './assets/puzzles/macdeath/macdeath1.png');
        this.load.image('bg2', './assets/puzzles/macdeath/macdeath2.png');
        this.load.image('bg3', './assets/puzzles/macdeath/macdeath3.png');
        this.load.image('ghosts', './assets/puzzles/macdeath/macdeathghosts.png');
    }

    create () {
        this.bg = this.add.tileSprite(10, 10, 1260, 570, 'bg').setOrigin(0, 0);
        this.ghosts = this.add.image(630, 285, 'ghosts');

        //exit button
        this.close = this.add.image(50, 50, 'exit');
        this.close.setDisplaySize(50, 50);
        this.close.setInteractive({
            cursor: handPointer
        });

        this.close.on('pointerdown', (pointer) => {
            this.scene.wake('theaterStart');
            this.scene.stop('macdeath');
            prevScene = 'theaterStart';
        });

        //ghosts box
        this.int = this.add.image(730, 215, 'hitbox1');
        this.int.setDisplaySize(100, 100);
        this.int.setInteractive({
            cursor: handPointer
        });

        this.intSolved = false;

        this.int.on('pointerdown', (pointer) => {
            if ((this.input.mouse.manager.defaultCursor == 'url(./assets/itemCursors/myth.png), pointer')) {
                this.input.setDefaultCursor(handDefault);
                interText.text = "The minion lured them away!";
                this.intSolved = true;
                clickedOut = false;
                this.ghosts.destroy();
                this.int.destroy();
            }
            else if (!this.intSolved) {
                interText.text = "These ghosts are in the way, I need to distract them.";
            }
        });

        this.int2Solved = false;

        this.input.on('pointerdown', (pointer) => {
            if (this.intSolved) {
                if ((this.input.mouse.manager.defaultCursor == 'url(./assets/itemCursors/ice.png), pointer') && (!this.int2Solved)) {
                    this.input.setDefaultCursor(handDefault);
                    interText.text = "The tower shield protected you from the chaos.";
                    this.int2Solved = true;
                    clickedOut = false;
                    this.bg.destroy();
                    this.bg1 = this.add.image(10, 10, 'bg1').setOrigin(0, 0);
                }
                else if (!this.int2Solved) {
                    interText.text = "I can't get to MacDeath with all this stuff flying everywhere. I need protection.";
                }
            }
        });

        this.int3Solved = false;

        this.input.on('pointerdown', (pointer) => {
            if (this.int2Solved) {
                if ((this.input.mouse.manager.defaultCursor == 'url(./assets/itemCursors/balance.png), pointer') && (!this.int3Solved)) {
                    this.input.setDefaultCursor(handDefault);
                    interText.text = "This dragon blade will make my next attack much stronger.";
                    this.int3Solved = true;
                    clickedOut = false;
                }
                else if (!this.int3Solved) {
                    interText.text = "He's casting a powerful shield around himself. I'll have to prep a powerful spell.";
                }
            }
        });

        this.int4Solved = false;

        this.input.on('pointerdown', (pointer) => {
            if (this.int3Solved) {
                if ((this.input.mouse.manager.defaultCursor == 'url(./assets/itemCursors/storm.png), pointer') && (!this.int4Solved)) {
                    this.input.setDefaultCursor(handDefault);
                    interText.text = "The hammer broke the shield!";
                    this.int4Solved = true;
                    clickedOut = false;
                    this.bg1.destroy();
                    this.bg2 = this.add.image(10, 10, 'bg2').setOrigin(0, 0);
                }
                else if (!this.int4Solved) {
                    interText.text = "He's casting a powerful shield around himself. I'll have to prep a powerful spell.";
                }
            }
        });

        this.int5Solved = false;

        this.input.on('pointerdown', (pointer) => {
            if (this.int4Solved) {
                if ((this.input.mouse.manager.defaultCursor == 'url(./assets/itemCursors/death.png), pointer') && (!this.int5Solved)) {
                    this.input.setDefaultCursor(handDefault);
                    interText.text = "MacDeath has been expelled.";
                    this.int5Solved = true;
                    clickedOut = false;
                    this.bg2.destroy();
                    this.bg3 = this.add.image(10, 10, 'bg3').setOrigin(0, 0);
                }
                else if (!this.int5Solved) {
                    interText.text = "Okay now I just have to do what I wrote in my notes.";
                }
            }
        });
    }
}