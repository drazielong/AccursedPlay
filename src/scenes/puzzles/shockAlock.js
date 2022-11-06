class shockAlock extends Phaser.Scene {
    constructor() {
        super("shockAlock");
    }

    preload () {
        this.load.image('shockBG', './assets/puzzles/shockAlock-bg.png');
        this.load.image('shockBG1', './assets/puzzles/shockAlock-unlocked.png');
        this.load.image('shock', './assets/puzzles/shock.png')
    }

    create () {
        this.bg = this.add.tileSprite(10, 10, 1260, 570, 'shockBG').setOrigin(0, 0);

        let shock = this.add.image(0, 0, 'shock').setOrigin(0, 0).setVisible(false);

        //balance square
        this.int1 = this.add.image(170, 310, 'hitbox');
        this.int1.setDisplaySize(100, 100);
        this.int1.setInteractive({
            cursor: handPointer
         });

        this.int1Solved = 'false';

        this.int1.on('pointerdown', (pointer) => {
            if ((this.input.mouse.manager.defaultCursor == 'url(./assets/itemCursors/balance.png), pointer')) {
                this.int1Solved = 'true';
                console.log("you did it");
            }
            if ((this.input.mouse.manager.defaultCursor != handDefault)) {
                this.input.setDefaultCursor(handDefault);
                interText.text = "Maybe this one?";
                clickedOut = 'false';
                if (this.int1Solved != 'true'){
                    this.int1Solved = 'wrong';
                }
            }
            else interText.text = "Something that doesn't have a pair?";
        });

        //myth square
        this.int2 = this.add.image(820, 460, 'hitbox');
        this.int2.setDisplaySize(100, 100);
        this.int2.setInteractive({
            cursor: handPointer
        });

        this.int2Solved = 'false';
        
        this.int2.on('pointerdown', (pointer) => {
            if ((this.input.mouse.manager.defaultCursor == 'url(./assets/itemCursors/myth.png), pointer')) {
                this.int2Solved = 'true';
                console.log("you did it");
            }
            if ((this.input.mouse.manager.defaultCursor != handDefault)) {
                this.input.setDefaultCursor(handDefault);
                interText.text = "Maybe this one?";
                clickedOut = false;
                if (this.int2Solved != 'true'){
                    this.int2Solved = 'wrong';
                }
            }
            else interText.text = "What does storm go with?";
        });

        //power button
        this.int3 = this.add.image(1075, 340, 'hitbox');
        this.int3.setDisplaySize(100, 100);
        this.int3.setInteractive({
            cursor: handPointer
        });

        this.electrocution = [50, 100, 500]; //this should get exponentially worse, but player only has 500 hp ... make it 1000?
        
        this.int3.on('pointerdown', (pointer) => {
            if ((this.int1Solved == 'true') && (this.int2Solved == 'true')) {
                interText.text = "yay u did it"
                this.bg.setTexture('shockBG1');
                this.int1.destroy();
                this.int2.destroy();
                this.int3.destroy();
            }
            if ((this.int1Solved == 'wrong') || (this.int2Solved == 'wrong')) {
                this.int1Solved = 'false';
                this.int2Solved = 'false';
                HP -= this.dmg;
                interText.text = "That didn't work-- You took " + this.dmg + " damage";
                shock.setVisible(true);
                this.cameras.main.shake(300, 0.001);
            }
            else if ((this.int1Solved == 'false') || (this.int2Solved == 'false')) {
                interText.text = "It looks like I'll be shocked if I can't connect the power correctly.";
            }
        });

        this.cameras.main.on('camerashakecomplete', function () {
            shock.setVisible(false);
        });

        //exit button
        this.close = this.add.image(50, 50, 'exit');
        this.close.setDisplaySize(50, 50);
        this.close.setInteractive({
            cursor: handPointer
        });

        this.close.on('pointerdown', (pointer) => {
            this.int1Solved = 'false';
            this.int2Solved = 'false';
            this.scene.switch('theaterStart');
            prevScene = 'theaterStart';
        });
    }

    update () {
        this.dmg = this.electrocution [Math.floor(Math.random() * 3)]
    }
}