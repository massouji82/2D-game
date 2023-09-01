type StartPosition = {
  x: number,
  y: number;
};

export const setStartPosition = (level: number): StartPosition => {
  let startPositon: StartPosition;

  switch (level) {
    case 1:
      startPositon = { x: 8, y: 12 };
      break;

    default:
      startPositon = { x: 8, y: 12 };

  }

  return startPositon;
};