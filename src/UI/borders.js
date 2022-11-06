class Borders extends Phaser.Scene {
    constructor () {
        super("Borders"); 
    }

    preload() {
        this.load.image('test', './assets/testHotbar.png');
    }

    animCreate (card) {
        var tweenIN = this.tweens.add({
            targets: card,
            scaleX: .7,
            scaleY: .7,
            y: card.y - 20,
            ease: 'Power2',
            duration: 200,
            repeat: 0,
        });

        var tweenOUT = this.tweens.add({
            targets: card,
            scaleX: .4,
            scaleY: .4,
            y: card.y,
            ease: 'Power3',
            duration: 200,
            repeat: 0,
        });

        card.on('pointerover', (pointer) =>{
            tweenIN.play();
        });
        
        card.on('pointerout', (pointer) =>{
            tweenOUT.play();
        });
    }

    clickedOutCheck (item) {
        var clickOutside = this.plugins.get('rexclickoutsideplugin').add(item, { 
            mode: 'pointerdown'
        });
      
        clickOutside.on('clickoutside', function() {
            clickedOut = true;
        });
    }

    create () {
        this.cameras.main.fadeIn(1000, 0, 0, 0)
        //borders
        //(x, y, height, width, fillcolor, alpha)
        this.add.rectangle(0, 0, 10, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 100, game.config.width, 100, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0xFFFFFF).setOrigin(0, 0);    
     
        //hotbar test
        this.test = this.add.image(0, 0, 'test').setOrigin(0, 0);

        //text box
        this.textBox = this.add.rectangle(640, game.config.height - 120, game.config.width - 20, 50, 0xFF0000);
        
        //text
        interText = this.add.text(640, 600, '', {
            fontFamily: 'Georgia, serif',
            fontSize: 24
        }).setOrigin(0.5,0.5);

        this.hpText = this.add.text(55, 660, 'HP\n' + HP, {
            fontFamily: 'Georgia, serif', 
            fontSize: 24,
            align: 'center'
        }).setOrigin(0.5,0.5);

        this.manaText = this.add.text(127, 675, 'Mana\n' + Mana, {
            fontFamily: 'Georgia, serif', 
            fontSize: 16,
            align: 'center'
        }).setOrigin(0.5,0.5);

        //add cards
        this.fire = this.add.image(200, 670, 'fire').setOrigin(0.5, 0.5).setDisplaySize(50, 78);
        this.fire.setInteractive({
            cursor: handPointer
        });

        this.storm = this.add.image(270, 670, 'storm').setOrigin(0.5, 0.5).setDisplaySize(50, 78);
        this.storm.setInteractive({
            cursor: handPointer
        });

        this.ice = this.add.image(340, 670, 'ice').setOrigin(0.5, 0.5).setDisplaySize(50, 78);
        this.ice.setInteractive({
            cursor: handPointer
        });

        this.balance = this.add.image(410, 670, 'balance').setOrigin(0.5, 0.5).setDisplaySize(50, 78);
        this.balance.setInteractive({
            cursor: handPointer
        });

        this.myth = this.add.image(480, 670, 'myth').setOrigin(0.5, 0.5).setDisplaySize(50, 78);
        this.myth.setInteractive({
            cursor: handPointer
        });

        this.life = this.add.image(550, 670, 'life').setOrigin(0.5, 0.5).setDisplaySize(50, 78);
        this.life.setInteractive({
            cursor: handPointer
        });

        this.death = this.add.image(620, 670, 'death').setOrigin(0.5, 0.5).setDisplaySize(50, 78);
        this.death.setInteractive({
            cursor: handPointer
        });

        //card animations
        this.animCreate(this.fire);
        this.animCreate(this.storm);
        this.animCreate(this.ice);
        this.animCreate(this.balance);
        this.animCreate(this.myth);
        this.animCreate(this.life);
        this.animCreate(this.death);

        //card click check
        //////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.clickedOutCheck(this.fire);

        this.fire.on('pointerup', (pointer) => {
            this.input.setDefaultCursor('url(./assets/itemCursors/fire.png), pointer');
            clickedOut = false;
        }); 

        this.input.on('pointerdown', (pointer) => {
            if ((this.input.mouse.manager.defaultCursor != handDefault) && (clickedOut = true)) {
                this.input.setDefaultCursor(handDefault);
                interText.text = "Can't use this here."; 
            }
        });
        //////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.clickedOutCheck(this.storm);

        this.storm.on('pointerup', (pointer) => {
            this.input.setDefaultCursor('url(./assets/itemCursors/storm.png), pointer');
            clickedOut = false;
        }); 

        this.input.on('pointerdown', (pointer) => {
            if ((this.input.mouse.manager.defaultCursor != handDefault) && (clickedOut = true)) {
                this.input.setDefaultCursor(handDefault);
                interText.text = "Can't use this here."; 
            }
        });
        //////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.clickedOutCheck(this.ice);

        this.ice.on('pointerup', (pointer) => {
            this.input.setDefaultCursor('url(./assets/itemCursors/ice.png), pointer');
            clickedOut = false;
        }); 

        this.input.on('pointerdown', (pointer) => {
            if ((this.input.mouse.manager.defaultCursor != handDefault) && (clickedOut = true)) {
                this.input.setDefaultCursor(handDefault);
                interText.text = "Can't use this here."; 
            }
        });
        //////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.clickedOutCheck(this.balance);

        this.balance.on('pointerup', (pointer) => {
            this.input.setDefaultCursor('url(./assets/itemCursors/balance.png), pointer');
            clickedOut = false;
        }); 

        this.input.on('pointerdown', (pointer) => {
            if ((this.input.mouse.manager.defaultCursor != handDefault) && (clickedOut = true)) {
                this.input.setDefaultCursor(handDefault);
                interText.text = "Can't use this here."; 
            }
        });
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.clickedOutCheck(this.myth);

        this.myth.on('pointerup', (pointer) => {
            this.input.setDefaultCursor('url(./assets/itemCursors/myth.png), pointer');
            clickedOut = false;
        }); 

        this.input.on('pointerdown', (pointer) => {
            if ((this.input.mouse.manager.defaultCursor != handDefault) && (clickedOut = true)) {
                this.input.setDefaultCursor(handDefault);
                interText.text = "Can't use this here."; 
            }
        });
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.clickedOutCheck(this.life);

        this.life.on('pointerup', (pointer) => {
            this.input.setDefaultCursor('url(./assets/itemCursors/life.png), pointer');
            clickedOut = false;
        }); 

        this.input.on('pointerdown', (pointer) => {
            if ((this.input.mouse.manager.defaultCursor != handDefault) && (clickedOut = true)) {
                this.input.setDefaultCursor(handDefault);
                interText.text = "Can't use this here."; 
            }
        });
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.clickedOutCheck(this.death);

        this.death.on('pointerup', (pointer) => {
            this.input.setDefaultCursor('url(./assets/itemCursors/death.png), pointer');
            clickedOut = false;
        }); 

        this.input.on('pointerdown', (pointer) => {
            if ((this.input.mouse.manager.defaultCursor != handDefault) && (clickedOut = true)) {
                this.input.setDefaultCursor(handDefault);
                interText.text = "Can't use this here."; 
            }
        });
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

        //inventory button
        this.menu = this.add.image(1220, 670, 'hitbox');
        this.menu.setDisplaySize(100, 80);
        this.menu.setInteractive({
           cursor: handPointer
        });

        //puts this scene to sleep (no updates), switches scenes to inventory
        this.menu.on('pointerdown', (pointer) => {
            this.scene.switch('backpackInv');
            this.scene.sleep(prevScene);
        });

        this.input.on('pointerdown', (pointer) => {
            console.log('X:' + Math.floor(this.input.activePointer.x));
            console.log('Y:' + Math.floor(this.input.activePointer.y));
        });
    }

    update () {
        //text timer
        //the only problem w this method is that if u keep clicking the timer will be extended for a long time
        //not the biggest deal tbh its just kind of annoying when switching scenes
        if((interText.text != '') && (textTimer == 0 || (this.input.activePointer.leftButtonDown()))) {
            textTimer = 1;
        }

        //text timer (maybe change time depending on length of string)
        if(textTimer > 0 && textTimer < 150) {
            textTimer += 1;
        } 
        else if(textTimer >= 150) {
            interText.text = '';
            textTimer = 0;
        }

        if (HP != prevHP) {
            this.hpText.text = 'HP\n' + HP;
            prevHP = HP;
            console.log(HP + ' ' + prevHP);
        }

        if (HP <= 0) {
            HP = 500;
            this.scene.stop(prevScene);
            this.scene.start('gameOver');
        }
    }
}