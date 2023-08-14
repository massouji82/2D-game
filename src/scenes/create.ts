import { Direction, GridEngine, Position } from "grid-engine";

export let slidingDirection = 'none';

function create(this: Phaser.Scene): void {
  const gridEngine: GridEngine = (<any>this).gridEngine;

  const tilemap = createTilemap.call(this);
  const playerSprite = createPlayerSprite.call(this);
  setupCamera.call(this, playerSprite);

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
  const levelOneTilemap = this.make.tilemap({ key: "levelOne" });
  levelOneTilemap.addTilesetImage("level-one", "tiles");
  for (let i = 0; i < levelOneTilemap.layers.length; i++) {
    const layer = levelOneTilemap.createLayer(i, "level-one", 0, 0);
    layer!.scale = 3;
  }

  return levelOneTilemap;
}

function createPlayerSprite(this: Phaser.Scene): Phaser.GameObjects.Sprite {
  const playerSprite = this.add.sprite(0, 0, "player");
  playerSprite.scale = 1.5;

  return playerSprite;
}

function setupCamera(this: Phaser.Scene, playerSprite: Phaser.GameObjects.Sprite): void {
  this.cameras.main.startFollow(playerSprite, true);
  this.cameras.main.setFollowOffset(-playerSprite.width, -playerSprite.height);
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


export default create;
