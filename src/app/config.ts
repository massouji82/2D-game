import { GridEngine } from "grid-engine";
import Phaser from "phaser";

import { preload } from "@/scenes/preload";
import { update } from "@/scenes/update";
import { create } from "@/scenes/create";

const config: Phaser.Types.Core.GameConfig = {
  title: "2D-game",
  render: {
    antialias: false,
  },
  type: Phaser.AUTO,
  plugins: {
    scene: [
      {
        key: "gridEngine",
        plugin: GridEngine,
        mapping: "gridEngine",
      },
    ],
  },
  parent: "game-container",
  scale: {
    width: (30 * 16),
    height: (15 * 16),
    mode: Phaser.Scale.FIT,
  },
  scene: {
    preload,
    create,
    update,
    physics: {
      arcade: {
      }
    },
  },
  input: {
    mouse: {
      preventDefaultWheel: false,
    },
    touch: {
      capture: false,
    },
  },
};


export default config;
