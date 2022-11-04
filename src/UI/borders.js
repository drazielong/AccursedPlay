class Borders extends Phaser.Scene {
    constructor () {
        super("Borders"); 
    }

    preload() {
        this.load.image('test', './assets/testHotbar.png');
    }

    create () {
        this.cameras.main.fadeIn(1000, 0, 0, 0)
        //borders
        //(x, y, height, width, fillcolor, alpha)
        this.add.rectangle(0, 0, 10, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 100, game.config.width, 100, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0xFFFFFF).setOrigin(0, 0);    

        //spell hand?
     
        //hotbar test
        this.test = this.add.tileSprite(0, 0, 1280, 720, 'test').setOrigin(0, 0);

        //text box, did not change origin so it stays in the middle
        this.textBox = this.add.rectangle(640, game.config.height - 120, game.config.width - 20, 50, 0xFF0000);
        
        //text
        interText = this.add.text(640, 600, '', {fontFamily: 'Georgia, serif'});
        interText.setFontSize(24);
        interText.setOrigin(0.5,0.5);

        this.backpack = this.add.image(70, 670, 'hitbox');
        this.backpack.setDisplaySize(100, 80);
        this.backpack.setInteractive({
           cursor: handPointer
        });

        this.deck = this.add.image(300, 670, 'hitbox');
        this.deck.setDisplaySize(100, 80);
        this.deck.setInteractive({
           cursor: handPointer
        });

        this.menu = this.add.image(1220, 670, 'hitbox');
        this.menu.setDisplaySize(100, 80);
        this.menu.setInteractive({
           cursor: handPointer
        });

        //puts this scene to sleep (no updates), switches scenes to inventory
        this.backpack.on('pointerdown', (pointer) => {
            this.scene.switch('backpackInv');
            this.scene.sleep(prevScene);
        });
    }

    update () {
        //when clicking the hitboxes, display new text

        this.deck.on('pointerdown', (pointer) => {
            interText.text = "My spell deck. I couldn't choose one school, so I learned a spell from each one.";
        });
        
        this.menu.on('pointerdown', (pointer) => {
            interText.text = "The settings menu. In theory.";
        });

        //if you click on multiple tings in succession the timer will NOT reset with this method. 
        //we can go back to resetting the texttimer value everytime u click on something... 
        //unless i can think of something else..
        if((interText.text != '') && (textTimer == 0 || (this.input.activePointer.leftButtonDown()))) {
            textTimer = 1;
        }

        //text timer (maybe change time depending on length of string)
        if(textTimer > 0 && textTimer < 200) {
            textTimer += 1;
        } 
        else if(textTimer >= 200) {
            interText.text = '';
            textTimer = 0;
        }
    }

}