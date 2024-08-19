import {
  ArrowPathIcon,
  PauseIcon,
  PlayIcon,
  ForwardIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useGame } from "@/use-game";
import { Button } from "@/components/Button";

export default function Home() {
  const { grid, gameActive, toggleCell, nextGrid, clearGrid, startGame, stopGame, randomGrid } =
    useGame();

  return (
    <main className="bg-darker text-light flex h-screen flex-col items-center justify-between gap-6 overflow-y-auto p-4 md:gap-10 md:p-8">
      <h1 className="text-center text-3xl font-bold md:text-4xl">Conway&apos;s Game of Life</h1>

      {/* Grid */}
      <div className="grid max-w-full grid-cols-[repeat(30,15px)] gap-1 overflow-auto overflow-x-auto px-2 md:grid-cols-[repeat(30,20px)]">
        {grid.map((row, x) =>
          row.map((item, y) => (
            <button
              key={`${x}-${y}`}
              className={clsx(
                "inline-block size-[15px] md:size-5",
                item ? "bg-orange-500" : "bg-light",
              )}
              onClick={() => !gameActive && toggleCell(x, y)}
            ></button>
          )),
        )}
      </div>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-10">
        <Button onClick={randomGrid}>
          <ArrowPathIcon className="size-5 shrink-0 sm:size-6" /> Random
        </Button>

        <Button onClick={() => (gameActive ? stopGame() : startGame())}>
          {gameActive ? (
            <PauseIcon className="size-5 shrink-0 sm:size-6" />
          ) : (
            <PlayIcon className="size-5 shrink-0 sm:size-6" />
          )}
          {gameActive ? "Pause" : "Play"}
        </Button>

        <Button onClick={nextGrid}>
          <ForwardIcon className="size-5 shrink-0 sm:size-6" /> Next
        </Button>

        <Button onClick={clearGrid}>
          <XMarkIcon className="size-5 shrink-0 sm:size-6" /> Clear
        </Button>
      </div>
    </main>
  );
}
