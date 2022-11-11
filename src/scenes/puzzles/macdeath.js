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

    //if a fire or life spell is used, restart
    macdeathReset() {
        this.input.enabled = false;     
        this.input.setDefaultCursor(handDefault);
        this.borderScene.outlineReset();
        interText.text = 'MacDeath: "Out, out, brief candle!"';
        this.time.delayedCall(1000, () => {
            this.cameras.main.fadeOut(500, 0, 0, 0)
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.time.delayedCall(200, () => {
                this.scene.start('macdeath');
                interText.text = "It looks like I can't use that spell.";
                });
            });
        });      
    }

    create () {
        this.bg3 = this.add.image(10, 10, 'bg3').setOrigin(0, 0);
        this.bg2 = this.add.image(10, 10, 'bg2').setOrigin(0, 0);
        this.bg1 = this.add.image(10, 10, 'bg1').setOrigin(0, 0);
        this.bg = this.add.tileSprite(10, 10, 1260, 570, 'bg').setOrigin(0, 0);
        this.ghosts = this.add.image(630, 285, 'ghosts');
        this.borderScene = this.scene.get("Borders");

        //ghosts box
        this.int = this.add.image(10, 10, 'hitbox').setOrigin(0,0);
        this.int.setDisplaySize(1260, 570);
        this.int.setInteractive({
            cursor: handPointer
        });

        //tornado box
        this.int2 = this.add.image(10, 10, 'hitbox').setVisible(false).setOrigin(0,0);
        this.int2.setDisplaySize(1260, 570);
        this.int2.setInteractive({
            cursor: handPointer
        });

        //shield box
        this.int3 = this.add.image(700, 245, 'hitbox').setVisible(false);
        this.int3.setDisplaySize(700, 500);
        this.int3.setInteractive({
            cursor: handPointer
        });

        //no shield
        this.int4 = this.add.image(700, 245, 'hitbox').setVisible(false);
        this.int4.setDisplaySize(700, 500);
        this.int4.setInteractive({
            cursor: handPointer
        });

        //no macdeath
        this.int5 = this.add.image(700, 245, 'hitbox').setVisible(false);
        this.int5.setDisplaySize(700, 500);
        this.int5.setInteractive({
            cursor: handPointer
        });

        this.intSolved = false;

        this.int.on('pointerdown', (pointer) => {
            if ((this.input.mouse.manager.defaultCursor == 'url(./assets/itemCursors/myth.png), pointer')) {
                this.input.setDefaultCursor(handDefault);
                this.borderScene.outlineReset();
                interText.text = "The minion lured them away!";
                this.intSolved = true;
                clickedOut = false;
                this.ghosts.destroy();
                this.int.destroy();
                this.int2.setVisible(true);
            }
            else if ((this.input.mouse.manager.defaultCursor == 'url(./assets/itemCursors/fire.png), pointer') || (this.input.mouse.manager.defaultCursor == 'url(./assets/itemCursors/life.png), pointer')) {
                this.macdeathReset();
            }
            else if ((this.input.mouse.manager.defaultCursor != handDefault)) {
                this.input.setDefaultCursor(handDefault);
                interText.text = "I need to summon something that can act like me.";
            }
            else if (!this.intSolved) {
                interText.text = "These ghosts are in the way, I need to distract them.";
            }
        });

        this.int2Solved = false;

        this.int2.on('pointerdown', (pointer) => {
            if (this.intSolved) {
                if ((this.input.mouse.manager.defaultCursor == 'url(./assets/itemCursors/ice.png), pointer') && (!this.int2Solved)) {
                    this.input.setDefaultCursor(handDefault);
                    this.borderScene.outlineReset();
                    interText.text = "The tower shield protected you from the chaos.";
                    this.int2Solved = true;
                    clickedOut = false;
                    this.bg.destroy();
                    this.int2.destroy();
                    this.int3.setVisible(true);
                }
                else if ((this.input.mouse.manager.defaultCursor == 'url(./assets/itemCursors/fire.png), pointer') || (this.input.mouse.manager.defaultCursor == 'url(./assets/itemCursors/life.png), pointer')) {
                    this.macdeathReset();
                }
                else if ((this.input.mouse.manager.defaultCursor != handDefault)) {
                    this.input.setDefaultCursor(handDefault);
                    interText.text = "I need a protection spell.";
                }
                else if (!this.int2Solved) {
                    interText.text = "I can't get to MacDeath with all this stuff flying everywhere. I need protection.";
                }
            }
        });

        this.int3Solved = false;

        this.int3.on('pointerdown', (pointer) => {
            if (this.int2Solved) {
                if ((this.input.mouse.manager.defaultCursor == 'url(./assets/itemCursors/balance.png), pointer') && (!this.int3Solved)) {
                    this.input.setDefaultCursor(handDefault);
                    this.borderScene.outlineReset();
                    interText.text = "This dragon blade will make my next attack much stronger.";
                    this.int3Solved = true;
                    clickedOut = false;
                    this.int3.destroy();
                    this.int4.setVisible(true);
                }
                else if ((this.input.mouse.manager.defaultCursor == 'url(./assets/itemCursors/fire.png), pointer') || (this.input.mouse.manager.defaultCursor == 'url(./assets/itemCursors/life.png), pointer')) {
                    this.macdeathReset();
                }
                else if ((this.input.mouse.manager.defaultCursor != handDefault)) {
                    this.input.setDefaultCursor(handDefault);
                    this.borderScene.outlineReset();
                    interText.text = "I need to use a spell to make my next attack stronger.";
                }
                else if (!this.int3Solved) {
                    interText.text = "He's casting a shield around himself. I'll have to prep a powerful spell.";
                }
            }
        });

        this.int4Solved = false;

        this.int4.on('pointerdown', (pointer) => {
            if (this.int3Solved) {
                if ((this.input.mouse.manager.defaultCursor == 'url(./assets/itemCursors/storm.png), pointer') && (!this.int4Solved)) {
                    this.input.setDefaultCursor(handDefault);
                    this.borderScene.outlineReset();
                    interText.text = "The hammer broke the shield!";
                    this.int4Solved = true;
                    clickedOut = false;
                    this.bg1.destroy();
                    this.int4.destroy();
                    this.int5.setVisible(true);
                }
                else if ((this.input.mouse.manager.defaultCursor == 'url(./assets/itemCursors/fire.png), pointer') || (this.input.mouse.manager.defaultCursor == 'url(./assets/itemCursors/life.png), pointer')) {
                    this.macdeathReset();
                }
                else if ((this.input.mouse.manager.defaultCursor != handDefault)) {
                    this.input.setDefaultCursor(handDefault);
                    interText.text = "Which spell is strong enough to knock out the shield in one go?";
                }
                else if (!this.int4Solved) {
                    interText.text = "Now that I used dragon blade, I have to pick a strong attack.";
                }
            }
        });

        this.int5Solved = false;

        this.input.on('pointerdown', (pointer) => {
            this.borderScene.outlineReset();
            if (this.int4Solved) {
                if ((this.input.mouse.manager.defaultCursor == 'url(./assets/itemCursors/death.png), pointer') && (!this.int5Solved)) {
                    this.input.setDefaultCursor(handDefault);
                    interText.text = "MacDeath has been expelled.";
                    this.int5Solved = true;
                    clickedOut = false;
                    this.bg2.destroy();
                    this.int5.destroy();
                }
                else if ((this.input.mouse.manager.defaultCursor == 'url(./assets/itemCursors/fire.png), pointer') || (this.input.mouse.manager.defaultCursor == 'url(./assets/itemCursors/life.png), pointer') && !this.int5Solved) {
                    this.macdeathReset();
                }
                else if ((this.input.mouse.manager.defaultCursor != handDefault) && !this.int5Solved) {
                    this.input.setDefaultCursor(handDefault);
                    interText.text = "How can I heal him with my own energy?";
                }
                else if (!this.int5Solved) {
                    interText.text = "Okay now I just have to do what I wrote in my notes.";
                }
            }
        });
        
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
    }
}