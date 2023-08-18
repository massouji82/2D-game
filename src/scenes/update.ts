import { Direction, GridEngine } from "grid-engine";
import { slidingDirection } from "./create";

function update(this: Phaser.Scene): void {
  const gridEngine = this.gridEngine;

  gridEngine.setSpeed("player", 40);

  if (slidingDirection !== 'none') {
    gridEngine.move("player", slidingDirection as Direction);
    return;
  }

  const cursors = this.input.keyboard!.createCursorKeys();

  if (cursors.left.isDown) {
    gridEngine.move("player", Direction.LEFT);
  } else if (cursors.right.isDown) {
    gridEngine.move("player", Direction.RIGHT);
  } else if (cursors.up.isDown) {
    gridEngine.move("player", Direction.UP);
  } else if (cursors.down.isDown) {
    gridEngine.move("player", Direction.DOWN);
  }
}

export default update;
