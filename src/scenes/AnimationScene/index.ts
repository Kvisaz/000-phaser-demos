import {Assets} from '../../assets';
import {onClick} from '../../utils';
import {AnimationMovingScene} from '../AnimationMoving';

export class AnimationScene extends Phaser.Scene {

    preload() {
        /**
         * load all animation sprites
         */
        Object.values(Assets.images).forEach(url => this.load.image(url, url));
    }

    create() {
        const sprite = this.add.sprite(300, 300, Assets.images.knightIdle0001);
        sprite.setScale(0.5);

        /**
         * setup frame by frame animation
         */
        const animationKey = 'knightAnimation';
        const knightAnimation = this.anims.create({
            /**
             * 'key' is common Phaser naming for unique string id
             */
            key: animationKey,
            // strongly recommended to use  texture atlas
            frames: [
                { key: Assets.images.knightIdle0001 },
                { key: Assets.images.knightIdle0002 },
                { key: Assets.images.knightIdle0003 },
                { key: Assets.images.knightIdle0004 },
                { key: Assets.images.knightIdle0005 },
                { key: Assets.images.knightIdle0006 },
            ],
            frameRate: 8
        });

        /**
         * run animation
         */
        sprite.play({ key: animationKey, repeat:-1 });

        /**
         * i use shortcut utility
         */
        onClick(sprite, ()=> this.scene.start(AnimationMovingScene.name))
    }
}
