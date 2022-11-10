class theaterStart extends Phaser.Scene {
    constructor() {
        super("theaterStart");
    }

    preload(){
        this.load.image('test', './assets/testHotbar.png');
    }

    create() {
        // title
        this.title = this.add.tileSprite(0, 10, 1280, 720, 'start').setOrigin(0, 0);

        //this.input.setDefaultCursor(handPointer);

        //images added higher on the list will be covered by items added later (layering)

        // borders 
        //(x, y, height, width, fillcolor, alpha)
        this.add.rectangle(0, 0, 10, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 100, game.config.width, 100, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0xFFFFFF).setOrigin(0, 0);

        //spell hand?
        
        //hotbar test
        this.test = this.add.tileSprite(0, 0, 1280, 720, 'test').setOrigin(0, 0);

        //text box (inner monologue or observations... will dialogue appear differently? maybe not)
        //alternatively, create art for the box within the original boundaries
        this.add.rectangle(10, game.config.height - 150, game.config.width - 20, 50, 0xFF0000).setOrigin(0, 0);

        // music
        //this.menuBGM = this.sound.add('menu_music', {volume: 0.2, loop: true});
        //this.menuBGM.play();

        // define key and var
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.textTimer = 0;
    }
}
