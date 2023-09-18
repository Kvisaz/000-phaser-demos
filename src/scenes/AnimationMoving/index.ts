import {createAnimationSprite} from '../../utils';
import {PhysicMove} from '../PhysicMove';

export class AnimationMovingScene extends Phaser.Scene {

    sprite: Phaser.GameObjects.Sprite | undefined;

    preload(){
        /**
         * We dont load because
         * textures already loaded
         * in previous scene
         */
    }

    create() {
        // this.sprite = this.add.sprite(300, 300, Assets.images.knightIdle0001);
        // this.sprite.setScale(0.5);
        this.sprite = createAnimationSprite(this);

        /**
         * common click
         */
        this.input.on(Phaser.Input.Events.POINTER_DOWN, ()=>{
            this.scene.start(PhysicMove.name)
        });
    }

    update(time: number, delta: number) {
        if(this.sprite){
            this.sprite.x += delta*0.2;
        }
    }

}
