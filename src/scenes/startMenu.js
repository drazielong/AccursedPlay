class startMenu extends Phaser.Scene {
    constructor() {
        super("startMenu");
    }

    preload(){
        // load assets
    }

    create() {
        // title
        //this.title = this.add.tileSprite(0, 10, 1280, 720, 'start').setOrigin(0, 0);

        // define key and var
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.textTimer = 0;
    }
    update (){
        if(this.textTimer == 0){
            if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
                this.textTimer += 1;
                //this.sound.play("CrashingWaves");
                this.cameras.main.fadeOut(1000, 0, 0, 0)
                this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                    this.time.delayedCall(500, () => {
                        this.scene.start('theaterStart');
                    });
                });
            }
        }
    }
}
