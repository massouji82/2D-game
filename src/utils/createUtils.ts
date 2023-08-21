import { Direction, GridEngine, Position } from "grid-engine";

export let slidingDirection = "none";
export let playerSprite: Phaser.GameObjects.Sprite;
export const coins = {
  amount: 1
};
let _level: Phaser.Tilemaps.Tilemap;

export function loadLevel(this: Phaser.Scene, levelKey: string): Phaser.Tilemaps.Tilemap {
  this.physics.world.colliders.destroy();
  _level?.destroy();
  _level = this.make.tilemap({ key: levelKey });
  _level.addTilesetImage("level-tileset", "tiles");

  for (let i = 0; i < _level.layers.length; i++) {
    _level.createLayer(i, "level-tileset", 0, 0);
  }

  return _level;
}

export function startMoving(gridEngine: GridEngine, direction: Direction | "none"): void {
  gridEngine.setWalkingAnimationMapping("player", undefined);
  slidingDirection = direction;
}

export function stopMoving(gridEngine: GridEngine): void {
  gridEngine.setWalkingAnimationMapping("player", 6);
  slidingDirection = "none";
}

export function getDirection(fromPos: Position, toPos: Position): Direction | "none" {
  if (fromPos.x < toPos.x) {
    return "left" as Direction;
  } else if (fromPos.x > toPos.x) {
    return "right" as Direction;
  } else if (fromPos.y < toPos.y) {
    return "up" as Direction;
  } else if (fromPos.y > toPos.y) {
    return "down" as Direction;
  }
  return "none";
}

export function initCoins(this: Phaser.Scene): void {
  const player = _createPlayerSprite.call(this);
  const coinSound = this.sound.add("sfx:coin");

  const coinPoints = _level.filterObjects(
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
}

function _createPlayerSprite(this: Phaser.Scene): Phaser.GameObjects.Sprite {
  playerSprite = this.physics.add.sprite(0, 0, "player");
  playerSprite.scale = 0.5;

  return playerSprite;
}