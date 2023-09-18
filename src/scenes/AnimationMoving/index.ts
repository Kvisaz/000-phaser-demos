import {createAnimationSprite} from '../../utils';
import {PhysicMove} from '../PhysicMove';

export class AnimationMovingScene extends Phaser.Scene {

    sprite: Phaser.GameObjects.Sprite | undefined;

    constructor(key: string) {
        super(key);
        /**
         * DONT USE CONSTRUCTOR AS INITIALIZATOR
         */
    }

    preload(){
        /**
         * We dont load because
         * textures already loaded
         * in previous scene
         */
    }

    create() {
        //  const sprite = this.add.sprite(300, 300, Assets.images.knightIdle0001);
        //  sprite.setScale(0.5);
        const sprite = createAnimationSprite(this);

        // instead scene update method
        // useful when you create behavior inside sprite
        // because EVERY GAMEOBJECT has own scene
      /*  this.events.on(Phaser.Scenes.Events.UPDATE, (time: number, delta: number) =>{
            sprite.x += delta*0.2;
        })*/

        this.sprite = sprite;

        /**
         * common SCENE click - like click on canvas
         */
        this.input.on(Phaser.Input.Events.POINTER_DOWN, ()=>{
            this.scene.start(PhysicMove.name)
        });
    }

    /**
     *  update - scene method
     *  OR scene.events.on(Phaser.Scenes.Events.UPDATE, updateCallback)
     */
    update(time: number, delta: number) {
        if(this.sprite){
            this.sprite.x += delta*0.2;
        }
    }

}
