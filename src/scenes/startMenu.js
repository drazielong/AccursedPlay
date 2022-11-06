class startMenu extends Phaser.Scene {
    constructor() {
        super("startMenu");
    }

    preload() {
        this.load.image('hitbox', './assets/hitbox1.png');
        this.load.image('exit', './assets/inventory/x.png');
        this.load.image('fire', './assets/cards/fire.png');
        this.load.image('ice', './assets/cards/ice.png');
        this.load.image('storm', './assets/cards/storm.png');
        this.load.image('death', './assets/cards/death.png');
        this.load.image('life', './assets/cards/life.png');
        this.load.image('myth', './assets/cards/myth.png');
        this.load.image('balance', './assets/cards/balance.png');
        this.load.plugin('rexclickoutsideplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexclickoutsideplugin.min.js', true);
    }

    create() {
        // title screen
        //this.title = this.add.tileSprite(0, 10, 1280, 720, 'start').setOrigin(0, 0);

        this.input.setDefaultCursor(handDefault);

        this.interText = this.add.text(640, 360, "This is gonna be a showcase of mechanics, not a full game.\n\nClick to skip this screen.", {fontFamily: 'Georgia, serif', align: 'center'});
        this.interText.setFontSize(24);
        this.interText.setOrigin(0.5,0.5);

        this.clicked = false; //this is so it'll only chance scenes once instead of spam clicking

        this.input.on('pointerdown', (pointer) => {
            if(!this.clicked) {
                this.clicked = true;
                this.cameras.main.fadeOut(1000, 0, 0, 0)
                this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                    this.time.delayedCall(500, () => {
                        this.scene.start('theaterStart');
                    });
                });
            }
        });
    }
}
