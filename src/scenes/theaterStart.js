class theaterStart extends Phaser.Scene {
    constructor() {
        super("theaterStart");
    }

    preload(){
        // load assets
        this.load.image('start', './assets/testBG.png')
        this.load.plugin('rexclickoutsideplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexclickoutsideplugin.min.js', true);
    }

    create() {
        this.cameras.main.fadeIn(1000, 0, 0, 0)
        prevScene = this.scene.key;
    
        // title
        this.title = this.add.tileSprite(10, 10, 1260, 600, 'start').setOrigin(0, 0);
        //borders for now
        this.add.rectangle(0, 0, 10, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 100, game.config.width, 100, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0xFFFFFF).setOrigin(0, 0);    

        //hotbar test
        this.test = this.add.tileSprite(0, 0, 1280, 720, 'test').setOrigin(0, 0);

        //text box, did not change origin so it stays in the middle
        this.textBox = this.add.rectangle(640, game.config.height - 120, game.config.width - 20, 50, 0xFF0000);

        //text
        this.interText = this.add.text(this.textBox.x, this.textBox.y, '', {fontFamily: 'Georgia, serif'});
        this.interText.setFontSize(24);
        this.interText.setOrigin(0.5,0.5);

        //hotbar hitboxes
        //(this.backpack, 100, 680);
        this.backpack = this.add.image(100, 680, 'hitbox');
        this.backpack.setDisplaySize(100, 100);
        this.backpack.setInteractive({
           cursor: handPointer
        });

        this.deck = this.add.image(300, 680, 'hitbox');
        this.deck.setDisplaySize(100, 100);
        this.deck.setInteractive({
           cursor: handPointer
        });

        this.card = this.add.image(640, 680, 'hitbox');
        this.card.setDisplaySize(100, 100);
        this.card.setInteractive({
           cursor: handPointer
        });

        this.menu = this.add.image(1150, 680, 'hitbox');
        this.menu.setDisplaySize(100, 100);
        this.menu.setInteractive({
           cursor: handPointer
        });

        //clicking outside detection test (can I somehow just have this work for clicking outside the texture key hitbox?)
        //maybe if i used a prefab for all interactable objects this it could work 
        //parameters: (gameObject, mode)
        var clickOutside = this.plugins.get('rexclickoutsideplugin').add(this.card, { 
            mode: 'pointerdown'
        });

        clickOutside.on('clickoutside', function() {
            this.clicked = true;
        });

        //puts this scene to sleep (no updates), switches scenes to inventory
        this.backpack.on('pointerdown', (pointer) => {
            this.scene.switch('backpackInv');
            console.log("hiii");
        });
    }

    update() {
        //when clicking the hitboxes, display new text
        //for items later; change cursor into item and misusing them changes cursor back
        this.card.on('pointerup', (pointer) => {
            this.interText.text = "The hotbar will go here for consumable items.";
            this.textTimer = 1;
            this.input.setDefaultCursor('url(./assets/ghostCursors/Move.cur), pointer');
            this.clicked = false;
        });
        
        this.menu.on('pointerup', (pointer) => {
            this.interText.text = "The settings menu. In theory.";
            this.textTimer = 1;
        });

        this.deck.on('pointerup', (pointer) => {
            this.interText.text = "My spell deck. As stretch I could animate them lol.";
            this.textTimer = 1;
        });

        //text timer (maybe change time depending on length of string)
        if(this.textTimer > 0 && this.textTimer < 200) {
            this.textTimer += 1;
        } 
        else if(this.textTimer >= 200) {
            this.interText.text = '';
            this.textTimer = 0;
        }

        //clicking off hitbox return to default cursor
        this.input.on('pointerdown', (pointer) => {
            if ((this.input.mouse.manager.defaultCursor != handDefault) && (this.clicked = true)) {
                this.input.setDefaultCursor(handDefault);
            }
        });   
    }
}
