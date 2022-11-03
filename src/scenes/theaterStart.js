class theaterStart extends Phaser.Scene {
    constructor() {
        super("theaterStart");
    }

    preload(){
        // load assets
        this.load.image('start', './assets/testBG.png')
    }

    create() {
        // title
        this.title = this.add.tileSprite(10, 10, 1260, 600, 'start').setOrigin(0, 0);
        
        this.add.rectangle(0, 0, 10, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 100, game.config.width, 100, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0xFFFFFF).setOrigin(0, 0);    

        //hotbar test
        this.test = this.add.tileSprite(0, 0, 1280, 720, 'test').setOrigin(0, 0);

        //text box, did not change origin so it stays in the middle
        this.textBox = this.add.rectangle(640, game.config.height - 120, game.config.width - 20, 50, 0xFF0000)

        //text
        this.interText = this.add.text(this.textBox.x, this.textBox.y, '', {fontFamily: 'Georgia, serif'});
        this.interText.setFontSize(24);
        this.interText.setOrigin(0.5,0.5);

        //hotbar hitboxes
        this.backpack = this.add.sprite(100, 680, 'hitbox');
        this.backpack.setDisplaySize(100, 100);
        this.backpack.setInteractive({
           cursor: handPointer
        });

        this.deck = this.add.sprite(300, 680, 'hitbox');
        this.deck.setDisplaySize(100, 100);
        this.deck.setInteractive({
           cursor: handPointer
        });

        this.card = this.add.sprite(640, 680, 'hitbox');
        this.card.setDisplaySize(100, 100);
        this.card.setInteractive({
           cursor: handPointer
        });

        this.menu = this.add.sprite(1150, 680, 'hitbox');
        this.menu.setDisplaySize(100, 100);
        this.menu.setInteractive({
           cursor: handPointer
        });
    }

    update() {
        //when clicking the hitboxes, display new text
        this.backpack.on('pointerdown', (pointer) => {
            this.interText.text = 'My backpack. It will contain useful info and key items.';
            this.textTimer = 1;
        });

        this.card.on('pointerdown', (pointer) => {
            this.interText.text = "The hotbar will go here for consumable items.";
            this.textTimer = 1;
        });

        this.menu.on('pointerdown', (pointer) => {
            this.interText.text = "The settings menu. In theory.";
            this.textTimer = 1;
        });

        this.deck.on('pointerdown', (pointer) => {
            this.interText.text = "My spell deck. As stretch I could animate them lol.";
            this.textTimer = 1;
        });

        //text timer (maybe change time depending on length of string)
        //or add an arrow for continuing text along
        if(this.textTimer > 0 && this.textTimer < 200) {
            this.textTimer += 1;
        } 
        else if(this.textTimer >= 200){
            // hide text
            this.interText.text = '';
            this.textTimer = 0;
        }
    }
}
