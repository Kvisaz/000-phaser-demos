import {createAnimationSprite} from '../../utils';

export class PhysicCollision extends Phaser.Scene {
    create(){
        this.physics.world.setBounds(0, 0, 960, 640);

        const bigKnight = createAnimationSprite(this);
        bigKnight.setScale(0.2);
        this.physics.add.existing(bigKnight);
        const spriteBody = bigKnight.body as Phaser.Physics.Arcade.Body;
        spriteBody.setBounce(1, 1).setCollideWorldBounds(true);
        spriteBody.setVelocityX(256);
        spriteBody.setMass(1000);

        const littleKnights = new Phaser.GameObjects.Group(this);
        for(let i=0; i<100; i++){
            const sprite = createAnimationSprite(this);
            sprite.setScale(0.125)
            this.physics.add.existing(sprite);
            const spriteBody = sprite.body as Phaser.Physics.Arcade.Body;
            spriteBody.setBounce(1, 1).setCollideWorldBounds(true);
            console.log('i', i)
            spriteBody.setVelocity(Math.random()*512,Math.random()*512);
            spriteBody.setMass(2);

            littleKnights.add(sprite);
        }

        this.physics.add.collider(bigKnight, littleKnights);
    }
}

