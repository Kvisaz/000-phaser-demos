import {Assets} from '../assets';

export function onClick(gameObject: Phaser.GameObjects.GameObject, callback: Function) {
    gameObject.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, callback);
    gameObject.setInteractive({
        cursor: 'pointer'
    })
}

export function createAnimationSprite(scene:Phaser.Scene): Phaser.GameObjects.Sprite {
    const sprite = scene.add.sprite(300, 300, Assets.images.knightIdle0001);
    sprite.setScale(0.5);

    /**
     * setup frame by frame animation
     */
    const animationKey = 'knightAnimation';
    const knightAnimation = scene.anims.create({
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

    return sprite;
}
