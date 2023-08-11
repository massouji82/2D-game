import { Direction, GridEngine } from "grid-engine";

function update(this: Phaser.Scene) {
  const cursors = this.input.keyboard!.createCursorKeys();
  const gridEngine: GridEngine = (<any>this).gridEngine;

  if (cursors.left.isDown) {
    gridEngine.move("player", "left" as Direction);
  } else if (cursors.right.isDown) {
    gridEngine.move("player", "right" as Direction);
  } else if (cursors.up.isDown) {
    gridEngine.move("player", "up" as Direction);
  } else if (cursors.down.isDown) {
    gridEngine.move("player", "down" as Direction);
  }
}

export default update;
