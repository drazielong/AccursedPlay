class Inventory extends Phaser.Scene {
    constructor() {
        super("backpackInv");
    }

    preload(){
        this.load.image('exit', './assets/inventory/x.png');
    }
    create() {
        //exit button
        this.closeInven = this.add.image(50, 50, 'exit');
        this.closeInven.setDisplaySize(50, 50);
        this.closeInven.setInteractive({
            cursor: handPointer
        });

        //info
        this.interText = this.add.text(640, 360, "This is your backpack.\nIt will contain useful info and key items.\nPress the X in the upper lefthand corner to return.", 
        {
            fontFamily: 'Georgia, serif',
            align: 'center',
            fontSize: 24
        });
        this.interText.setOrigin(0.5,0.5);

        // "x" to close inventory
        this.closeInven.on('pointerdown', () => {
            this.scene.stop("backpackInv");
            this.scene.wake(prevScene);
            this.scene.wake('Borders');
        });
    }
} 
