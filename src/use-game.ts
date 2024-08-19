import { useState, useRef } from "react";
import { getRandomGrid, getNextGrid, toggleGridCell, getEmptyGrid } from "@/utils";

type RUseGame = {
  grid: boolean[][];
  gameActive: boolean;
  toggleCell: (x: number, y: number) => void;
  nextGrid: () => void;
  randomGrid: () => void;
  clearGrid: () => void;
  startGame: () => void;
  stopGame: () => void;
};

export const useGame = (): RUseGame => {
  const [grid, setGrid] = useState<boolean[][]>(() => getRandomGrid());
  const [gameActive, setGameActive] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const stopGame = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
    setGameActive(false);
  };

  const startGame = () => {
    intervalRef.current = setInterval(nextGrid, 500);
    setGameActive(true);
  };

  const toggleCell = (x: number, y: number) =>
    !gameActive && setGrid((currGrid) => toggleGridCell(currGrid, x, y));

  const nextGrid = () => setGrid((currGrid) => getNextGrid(currGrid));

  const randomGrid = () => {
    stopGame();
    setGrid(() => getRandomGrid());
  };

  const clearGrid = () => {
    stopGame();
    setGrid(() => getEmptyGrid());
  };

  return {
    grid,
    gameActive,
    toggleCell,
    nextGrid,
    randomGrid,
    clearGrid,
    startGame,
    stopGame,
  };
};
