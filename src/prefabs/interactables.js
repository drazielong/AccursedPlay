//note: i don't remember how to do this or if this will work *cries*
class Interactables extends Phaser.GameObjects.Sprite {
    //add all variables we want to pass onto the object
    constructor(scene, x, y, texture, callback) {
        super(scene, x, y, texture, callback);
        scene.add.existing(this);
    }

    preload(){
        //this.load.image('hitbox', './assets/Hitbox1.png');
    }

    create() {
        this.obj = this.add.image(x, y, texture);
        this.obj.setDisplaySize(100, 100);
        this.obj.setInteractive({
           cursor: handPointer
        });
    }
}