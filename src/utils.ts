const GRID_SIZE = 30;

export const getEmptyGrid = (): boolean[][] =>
  new Array<boolean[]>(GRID_SIZE).fill(new Array<boolean>(GRID_SIZE).fill(false));

export const getRandomGrid = (): boolean[][] =>
  getEmptyGrid().map((row) => row.map(() => Math.random() < 0.25));

const countAliveNeighbors = (currentGrid: boolean[][], x: number, y: number): number => {
  const neighbors: [number, number][] = [
    [x - 1, y - 1],
    [x, y - 1],
    [x + 1, y - 1],
    [x - 1, y],
    [x + 1, y],
    [x - 1, y + 1],
    [x, y + 1],
    [x + 1, y + 1],
  ];

  return neighbors.reduce((acc, [row, col]) => {
    if (currentGrid?.[row]?.[col] === true) {
      acc++;
    }
    return acc;
  }, 0);
};

export const getNextGrid = (currentGrid: boolean[][]): boolean[][] => {
  const nextGrid = getEmptyGrid();

  return nextGrid.map((row, rowIndex) =>
    row.map((cell, colIndex) => {
      let newCell = cell;

      const aliveNeighbors = countAliveNeighbors(currentGrid, rowIndex, colIndex);

      if (currentGrid?.[rowIndex]?.[colIndex]) {
        newCell = aliveNeighbors === 3 || aliveNeighbors === 2;
      } else if (aliveNeighbors === 3) {
        newCell = true;
      }
      return newCell;
    }),
  );
};

export const toggleGridCell = (currentGrid: boolean[][], x: number, y: number): boolean[][] => {
  return currentGrid.map((row, i) =>
    i === x ? row.map((item, j) => (y === j ? !item : item)) : row,
  );
};
