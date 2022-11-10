class Inventory extends Phaser.Scene {
    constructor() {
        super("backpackInv");
    }

    preload(){
        this.load.image('journal', './assets/inventory/journal.png');
    }
    create() {
        //bg
        this.bg = this.add.image(10, 10, 'journal').setOrigin(0, 0);

        //exit button
        this.closeInven = this.add.image(50, 50, 'exit');
        this.closeInven.setDisplaySize(50, 50);
        this.closeInven.setInteractive({
            cursor: handPointer
        });

        // "x" to close inventory
        this.closeInven.on('pointerdown', () => {
            this.scene.stop("backpackInv");
            this.scene.wake(prevScene);
            this.scene.wake('Borders');
        });
    }
} 
