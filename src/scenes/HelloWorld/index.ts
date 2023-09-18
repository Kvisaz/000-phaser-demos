import {SpriteScene} from '../Sprite';
import {onClick} from '../../utils';
import {AnimationMovingScene} from '../AnimationMoving';
import {PhysicMove} from '../PhysicMove';

export class HelloWorld extends Phaser.Scene {

    /**
     * create - like mount component in React
     */
    create() {
        /**
         * All game objects will be added through scene.add
         */
        const text = this.add.text(0, 0, 'Hello, World', {
            fontSize: '64px',
            color: "lime"
        });

        /**
         * User input - gameObject.on
         */
        text.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {

            /**
             * Phaser routing
             * - has many methods
             * - needs scene string key
             */
            this.scene.start(SpriteScene.name);
        });
        text.setInteractive({
            cursor: 'pointer'
        });


        /**
         * common SCENE click - like click on canvas
         */
        this.input.on(Phaser.Input.Events.POINTER_DOWN, ()=>{
            this.scene.start(SpriteScene.name)
        });
    }
}
