class gameOver extends Phaser.Scene {
    constructor() {
        super("gameOver");
    }

    create() {
        console.log("gameover screen");
        this.add.text(640, 360, "Whoops you ran out of HP!!!\nClick to retry.", {fontFamily: 'Georgia, serif', align: 'center'}).setFontSize(24).setOrigin(0.5,0.5);
        
        this.clicked = false; 

        this.input.on('pointerdown', (pointer) => {
            if(!this.clicked) {
                this.clicked = true;
                this.cameras.main.fadeOut(1000, 0, 0, 0)
                this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                    this.time.delayedCall(500, () => {
                        this.scene.start('startMenu');
                    });
                });
            }
        });
    }
}