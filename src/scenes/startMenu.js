class startMenu extends Phaser.Scene {
    constructor() {
        super("startMenu");
    }

    preload(){
        // load assets
        this.load.image('hitbox', './assets/hitbox1.png');
        this.load.plugin('rexclickoutsideplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexclickoutsideplugin.min.js', true);
    }

    create() {
        // title screen
        //this.title = this.add.tileSprite(0, 10, 1280, 720, 'start').setOrigin(0, 0);

        this.input.setDefaultCursor(handDefault);

        this.interText = this.add.text(640, 360, "Press space to skip this screen. It'll be the main menu.", {fontFamily: 'Georgia, serif'});
        this.interText.setFontSize(24);
        this.interText.setOrigin(0.5,0.5);

        // define key and var
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.textTimer = 0;
    }
    
    update (){
        if(this.textTimer == 0){
            if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
                this.textTimer += 1;
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
