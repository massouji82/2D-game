import { level } from "./initLevel";

export let playerSprite: Phaser.GameObjects.Sprite;
export const coins = {
  amount: 1
};

export function initObjects(this: Phaser.Scene): void {
  const player = _createPlayerSprite.call(this);
  const coinSound = this.sound.add("sfx:coin");

  const coinPoints = level.filterObjects(
    "Coins",
    (obj: any) => obj.properties[0].name === "CoinPoint"
  );

  const coinList = coinPoints!.map((coinPoint) => {
    const coinSprite = this.physics.add.sprite(coinPoint.x!, coinPoint.y!, "coin", 133);

    coinSprite.anims.create({
      key: "rotate",
      frames: this.anims.generateFrameNames("coin", { start: 132, end: 135 }),
      repeat: -1,
      frameRate: 10,
    });
    coinSprite.anims.play("rotate");

    return coinSprite;
  });

  coins.amount = coinList.length;

  this.physics.add.overlap(player, coinList, (_playerSprite, coin) => {
    coin.destroy();
    // this.cameras.main.flash();
    coinSound.play();
    --coins.amount;
  });

  if (coins.amount === 0) this.scene.start();
}

function _createPlayerSprite(this: Phaser.Scene): Phaser.GameObjects.Sprite {
  playerSprite = this.physics.add.sprite(0, 0, "player");
  playerSprite.scale = 0.5;

  return playerSprite;
}