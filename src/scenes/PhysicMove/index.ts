import {createAnimationSprite} from '../../utils';
import {phaserConfig} from '../../config';

export class PhysicMove extends Phaser.Scene {
    create(){
        const sprite = createAnimationSprite(this);

        /**
         * critical
         */
        this.physics.add.existing(sprite);

        const spriteBody = sprite.body as Phaser.Physics.Arcade.Body;
        /**
         * in pixels per second
         */
        spriteBody.setVelocityX(256);

        /**
         * collide bounds - velocity will be inverted
         */
        spriteBody.setBounce(1, 1).setCollideWorldBounds(true);

        this.physics.world.setBounds(0, 0, 960, 640);

    }
}
