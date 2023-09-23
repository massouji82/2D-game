import { scene } from "@/scenes/create";

export const transition = () => {
  const MASK_MIN_SCALE = 0;
  const MASK_MAX_SCALE = 3;

  const maskShape = new Phaser.Geom.Circle(
    scene.sys.game.config.width as number / 2,
    scene.sys.game.config.height as number / 2,
    scene.sys.game.config.height as number / 2
  );

  scene.add.graphics()
    .fillCircleShape(maskShape)
    .generateTexture('mask');

  const mask = scene.add.image(0, 0, 'mask')
    .setPosition(
      scene.sys.game.config.width as number / 2,
      scene.sys.game.config.height as number / 2,
    );

  scene.cameras.main.setMask(
    new Phaser.Display.Masks.BitmapMask(scene, mask)
  );

  scene.events.on("startLevel", () => {
    const propertyConfig = {
      ease: 'Expo.easeInOut',
      from: MASK_MIN_SCALE,
      start: MASK_MIN_SCALE,
      to: MASK_MAX_SCALE,
    };

    scene.tweens.add({
      // delay: 2750,
      duration: 1500,
      scaleX: propertyConfig,
      scaleY: propertyConfig,
      targets: mask,
    });
  });

  // scene.events.on("endLevel", () => {
  //   // scene.scene.pause();

  //   // scene.cameras.main.fadeOut(1500);

  //   const propertyConfig = {
  //     ease: 'Expo.easeInOut',
  //     from: MASK_MAX_SCALE,
  //     start: MASK_MAX_SCALE,
  //     to: MASK_MIN_SCALE,
  //   };

  //   scene.tweens.add({
  //     duration: 2500,
  //     scaleX: propertyConfig,
  //     scaleY: propertyConfig,
  //     targets: mask,
  //   });
  // });
};