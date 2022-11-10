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

    cursorCheck (item) {
        if (item.isCursor) {
            this.clickedOutCheck(item); 
        }
    }

    outlineReset (item, outline) {
        if ((item.isCursor) && (clickedOut)) {
            outline.setStrokeStyle(5,0x000000);
        }
    }

    create () {
        this.cameras.main.fadeIn(1000, 0, 0, 0)
        //borders
        //(x, y, height, width, fillcolor, alpha)
        this.add.rectangle(0, 0, 10, game.config.height, 0xc5c5c5).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 100, game.config.width, 100, 0xc5c5c5).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0xc5c5c5).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0xc5c5c5).setOrigin(0, 0);    
     
        //hotbar test
        this.test = this.add.image(0, 0, 'test').setOrigin(0, 0);
        this.add.rectangle(790, 670, 80, 80).setStrokeStyle(5, 0x000000).setOrigin(0.5, 0.5);
        this.add.rectangle(870, 670, 80, 80).setStrokeStyle(5, 0x000000).setOrigin(0.5, 0.5);
        this.add.rectangle(950, 670, 80, 80).setStrokeStyle(5, 0x000000).setOrigin(0.5, 0.5);
        this.add.rectangle(1030, 670, 80, 80).setStrokeStyle(5, 0x000000).setOrigin(0.5, 0.5);
        this.add.rectangle(1110, 670, 80, 80).setStrokeStyle(5, 0x000000).setOrigin(0.5, 0.5);

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

        //card outlines
        this.fireOutline = this.add.rectangle(200, 670, 50, 78).setStrokeStyle(5, 0x000000).setOrigin(0.5, 0.5);
        this.stormOutline = this.add.rectangle(270, 670, 50, 78).setStrokeStyle(5, 0x000000).setOrigin(0.5, 0.5);
        this.iceOutline = this.add.rectangle(340, 670, 50, 78).setStrokeStyle(5, 0x000000).setOrigin(0.5, 0.5);
        this.balanceOutline = this.add.rectangle(410, 670, 50, 78).setStrokeStyle(5, 0x000000).setOrigin(0.5, 0.5);
        this.mythOutline = this.add.rectangle(480, 670, 50, 78).setStrokeStyle(5, 0x000000).setOrigin(0.5, 0.5);
        this.lifeOutline = this.add.rectangle(550, 670, 50, 78).setStrokeStyle(5, 0x000000).setOrigin(0.5, 0.5);
        this.deathOutline = this.add.rectangle(620, 670, 50, 78).setStrokeStyle(5, 0x000000).setOrigin(0.5, 0.5);

        outlineList = [this.fireOutline, this.stormOutline, this.iceOutline, this.balanceOutline, this.mythOutline, this.lifeOutline, this.deathOutline];

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

        cardList = [this.fire, this.storm, this.ice, this.balance, this.myth, this.life, this.death];

        //card animations
        cardList.forEach(element => {
            this.animCreate(element);
        });

        //card click check
        this.fire.on('pointerup', (pointer) => {
            this.input.setDefaultCursor('url(./assets/itemCursors/fire.png), pointer');
            this.fireOutline.setStrokeStyle(5, 0x16c461);
            clickedOut = false;
            this.fire.isCursor = true;
        }); 

        this.storm.on('pointerup', (pointer) => {
            this.input.setDefaultCursor('url(./assets/itemCursors/storm.png), pointer');
            this.stormOutline.setStrokeStyle(5, 0x16c461);
            clickedOut = false;
            this.storm.isCursor = true;
        }); 

        this.ice.on('pointerup', (pointer) => {
            this.input.setDefaultCursor('url(./assets/itemCursors/ice.png), pointer');
            this.iceOutline.setStrokeStyle(5, 0x16c461);
            clickedOut = false;
            this.ice.isCursor = true;
        }); 

        this.balance.on('pointerup', (pointer) => {
            this.input.setDefaultCursor('url(./assets/itemCursors/balance.png), pointer');
            this.balanceOutline.setStrokeStyle(5, 0x16c461);
            clickedOut = false;
            this.balance.isCursor = true;
        }); 

        this.myth.on('pointerup', (pointer) => {
            this.input.setDefaultCursor('url(./assets/itemCursors/myth.png), pointer');
            this.mythOutline.setStrokeStyle(5, 0x16c461);
            clickedOut = false;
            this.myth.isCursor = true;
        }); 

        this.life.on('pointerup', (pointer) => {
            this.input.setDefaultCursor('url(./assets/itemCursors/life.png), pointer');
            this.lifeOutline.setStrokeStyle(5, 0x16c461);
            clickedOut = false;
            this.life.isCursor = true;
        }); 

        this.death.on('pointerup', (pointer) => {
            this.input.setDefaultCursor('url(./assets/itemCursors/death.png), pointer');
            this.deathOutline.setStrokeStyle(5, 0x16c461);
            clickedOut = false;
            this.death.isCursor = true;
        }); 

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

        //position of mouseclick for placing hitboxes
        this.input.on('pointerdown', (pointer) => {
            console.log('X:' + Math.floor(this.input.activePointer.x));
            console.log('Y:' + Math.floor(this.input.activePointer.y));
        });

        console.log()
    }

    update () {
         //Outline reset: hope this doesnt crash my game lmfao
         outlineList.forEach(element => {
            if (clickedOut) {
                element.setStrokeStyle(5,0x000000);
            }
        });

        //if pointer is over a hitbox, emptySpace = false, else true

        //if cursor is this item, run clickedout check on it
        if (this.input.mouse.manager.defaultCursor != handDefault) {
            cardList.forEach(element => {
                if (element.isCursor) {
                    this.cursorCheck(element); //clickedout (of this.fire?) = true or false
                    if (clickedOut) { //add && emptySpace to make sure u aren't clicking an interactable?
                        this.input.setDefaultCursor(handDefault);
                        interText.text = "Can't use this here.";
                        clickedOut = false; 
                        emptySpace = false;
                    }
                }
            });
        }

        //text timer
        //the only problem w this method is that if u keep clicking the timer will be extended for a long time
        //not the biggest deal tbh its just kind of annoying when switching scenes
        if((interText.text != '') && (textTimer == 0 || (this.input.activePointer.leftButtonDown()))) {
            textTimer = 1;
        }

        //text timer 
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