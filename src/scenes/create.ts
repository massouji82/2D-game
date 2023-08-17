import { Direction, GridEngine, Position } from "grid-engine";

export let slidingDirection = 'none';
let coins: Phaser.GameObjects.Sprite[];
let playerSprite: Phaser.GameObjects.Sprite;
let levelOneTilemap: Phaser.Tilemaps.Tilemap;

function create(this: Phaser.Scene): void {
  const gridEngine: GridEngine = (<any>this).gridEngine;

  const tilemap = createTilemap.call(this);
  playerSprite = createPlayerSprite.call(this);
  initCoins.call(this);

  const gridEngineConfig = {
    characters: [
      {
        id: "player",
        sprite: playerSprite,
        walkingAnimationMapping: 6,
        startPosition: { x: 8, y: 12 },
      },
    ],
  };

  gridEngine.create(tilemap, gridEngineConfig);

  gridEngine
    .positionChangeStarted()
    .subscribe(({ charId, exitTile, enterTile }) => {
      startMoving(
        gridEngine,
        playerSprite,
        getDirection(enterTile, exitTile),
      );
    });

  gridEngine
    .movementStopped()
    .subscribe(({ charId, direction }) => {
      stopMoving(gridEngine, playerSprite);
    });
}

function createTilemap(this: Phaser.Scene): Phaser.Tilemaps.Tilemap {
  levelOneTilemap = this.make.tilemap({ key: "level-one" });
  levelOneTilemap.addTilesetImage("level-tileset", "tiles");

  for (let i = 0; i < levelOneTilemap.layers.length; i++) {
    const layer = levelOneTilemap.createLayer(i, "level-tileset", 0, 0);
  }

  return levelOneTilemap;
}

function createPlayerSprite(this: Phaser.Scene): Phaser.GameObjects.Sprite {
  playerSprite = this.physics.add.sprite(0, 0, "player");
  playerSprite.scale = 0.5;

  return playerSprite;
}

function startMoving(gridEngine: GridEngine, playerSprite: Phaser.GameObjects.Sprite, direction: Direction | 'none'): void {
  gridEngine.setWalkingAnimationMapping('player', undefined);
  slidingDirection = direction;
}

function stopMoving(gridEngine: GridEngine, playerSprite: Phaser.GameObjects.Sprite): void {
  gridEngine.setWalkingAnimationMapping('player', 6);
  slidingDirection = 'none';
}

function getDirection(fromPos: Position, toPos: Position): Direction | 'none' {
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

function initCoins(this: Phaser.Scene): void {
  const coinPoints = levelOneTilemap.filterObjects('Coins', (obj: any) =>
    obj.properties[0].name === 'CoinPoint'
  );

  coins = coinPoints!.map(coinPoint =>
    this.physics.add.sprite(coinPoint.x!, coinPoint.y!, 'tiles_coin', 133)
  );

  this.physics.add.overlap(
    playerSprite,
    coins,
    (_playerSprite, coin) => {
      coin.destroy();
      this.cameras.main.flash();
    });
}


export default create;
