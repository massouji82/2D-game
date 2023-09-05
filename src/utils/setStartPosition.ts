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

    case 2:
      startPositon = { x: 11, y: 14 };
      break;

    case 3:
      startPositon = { x: 23, y: 3 };
      break;

    case 4:
      startPositon = { x: 18, y: 10 };
      break;

    // case 5:
    //   startPositon = { x: 11, y: 14 };
    //   break;

    default:
      startPositon = { x: 8, y: 12 };

  }

  return startPositon;
};