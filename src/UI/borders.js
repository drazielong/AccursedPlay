class Borders extends Phaser.Scene {
    constructor () {
        super("Borders"); 
    }

    preload() {
        this.load.image('test', './assets/testHotbar.png');
    }

    create () {
        //borders
        //(x, y, height, width, fillcolor, alpha)
        this.add.rectangle(0, 0, 10, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 100, game.config.width, 100, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0xFFFFFF).setOrigin(0, 0);    

        //spell hand?
     
        //hotbar test
        this.test = this.add.tileSprite(0, 0, 1280, 720, 'test').setOrigin(0, 0);

        //text box (inner monologue or observations... will dialogue appear differently? maybe not)
        this.add.rectangle(10, game.config.height - 150, game.config.width - 20, 50, 0xFF0000).setOrigin(0, 0);
    }

}