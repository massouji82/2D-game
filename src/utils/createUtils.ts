import { Direction, GridEngine, Position } from "grid-engine";

export let slidingDirection = 'none';
export let playerSprite: Phaser.GameObjects.Sprite;
let levelOneTilemap: Phaser.Tilemaps.Tilemap;

export function createTilemap(this: Phaser.Scene): Phaser.Tilemaps.Tilemap {
  levelOneTilemap = this.make.tilemap({ key: "level-one" });
  levelOneTilemap.addTilesetImage("level-tileset", "tiles");

  for (let i = 0; i < levelOneTilemap.layers.length; i++) {
    const layer = levelOneTilemap.createLayer(i, "level-tileset", 0, 0);
  }

  return levelOneTilemap;
};

export function startMoving(gridEngine: GridEngine, direction: Direction | 'none'): void {
  gridEngine.setWalkingAnimationMapping('player', undefined);
  slidingDirection = direction;
}

export function stopMoving(gridEngine: GridEngine): void {
  gridEngine.setWalkingAnimationMapping('player', 6);
  slidingDirection = 'none';
}

export function getDirection(fromPos: Position, toPos: Position): Direction | 'none' {
  if (fromPos.x < toPos.x) {
    return 'left' as Direction;
  } else if (fromPos.x > toPos.x) {
    return 'right' as Direction;
  } else if (fromPos.y < toPos.y) {
    return 'up' as Direction;
  } else if (fromPos.y > toPos.y) {
    return 'down' as Direction;
  }
  return 'none';
}

export function initCoins(this: Phaser.Scene): void {
  const player = createPlayerSprite.call(this);

  const coinPoints = levelOneTilemap.filterObjects('Coins', (obj: any) =>
    obj.properties[0].name === 'CoinPoint'
  );

  const coins = coinPoints!.map(coinPoint =>
    this.physics.add.sprite(coinPoint.x!, coinPoint.y!, 'tiles_coin', 133)
  );

  this.physics.add.overlap(
    player,
    coins,
    (_playerSprite, coin) => {
      coin.destroy();
      this.cameras.main.flash();
    });
}

function createPlayerSprite(this: Phaser.Scene): Phaser.GameObjects.Sprite {
  playerSprite = this.physics.add.sprite(0, 0, "player");
  playerSprite.scale = 0.5;

  return playerSprite;
}