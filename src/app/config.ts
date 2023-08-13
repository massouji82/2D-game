import { GridEngine } from "grid-engine";
import Phaser from "phaser";
import create from "@/scenes/create";
import preload from "@/scenes/preload";
import update from "@/scenes/update";

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
  scale: {
    mode: Phaser.Scale.FIT,
  },
  width: window.innerWidth,
  height: window.innerHeight,
  scene: {
    create,
    preload,
    update,
  },
  backgroundColor: "#48C4F8",
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
