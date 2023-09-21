import {Assets} from '../../assets';
import {AnimationScene} from '../AnimationScene';

export class SpriteScene extends Phaser.Scene {

    /**
     * place here all loading routines
     * - can use one special scene, like BootScene
     * - all loaded images, sounds will be kept in game, not scene
     */
    preload() {
        this.load.image(Assets.images.knightIdle0001, Assets.images.knightIdle0001)
    }

    create() {
        /**
         * Sprite will live in this scene only
         * we can create it through constructor & adding to scene
         * useful for non-standard classes
         */
        const sprite = new Phaser.GameObjects.Sprite(this, 300, 300, Assets.images.knightIdle0001);
        this.add.existing(sprite);
        /**
         *  OR use scene add helper
         *  useful for standard classes
         */
        // const sprite = this.add.sprite(300, 300, Assets.images.knightIdle0001);
        sprite.setScale(0.5);

        /**
         * input
         */
        sprite.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, ()=>{
            this.scene.start(AnimationScene.name);
        })
        sprite.setInteractive({
            cursor: 'pointer',
        })


        /**
         * common SCENE click - like click on canvas
         */
        this.input.on(Phaser.Input.Events.POINTER_DOWN, ()=>{
            this.scene.start(AnimationScene.name)
        });
    }
}
