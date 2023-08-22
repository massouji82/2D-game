import { scene } from "@/scenes/create";
import { level } from "./initLevel";

export let playerSprite: Phaser.GameObjects.Sprite;
export const coins = {
  amount: 1
};

export function initObjects(): void {
  const player = _createPlayerSprite(scene);
  const coinSound = scene.sound.add("sfx:coin");

  const coinPoints = level.filterObjects(
    "Coins",
    (obj: any) => obj.properties[0].name === "CoinPoint"
  );

  const coinList =
    coinPoints!.map((coinPoint): Phaser.Types.Physics.Arcade.SpriteWithDynamicBody => {
      const coinSprite = scene.physics.add.sprite(
        coinPoint.x!,
        coinPoint.y!,
        "coin",
        133);

      coinSprite.anims.create(
        {
          key: "rotate",
          frames: scene.anims.generateFrameNames("coin", { start: 132, end: 135 }),
          repeat: -1,
          frameRate: 10,
        });

      coinSprite.anims.play("rotate");

      return coinSprite;
    });

  coins.amount = coinList.length;

  scene.physics.add.overlap(
    player,
    coinList,
    (_playerSprite, coin) => {
      coin.destroy();
      // this.cameras.main.flash();
      coinSound.play();
      --coins.amount;
    });
}

function _createPlayerSprite(scene: Phaser.Scene): Phaser.GameObjects.Sprite {
  playerSprite = scene.physics.add.sprite(0, 0, "player");
  playerSprite.scale = 0.5;

  return playerSprite;
}