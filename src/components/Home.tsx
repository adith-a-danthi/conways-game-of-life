import clsx from "clsx";
import { useGame } from "@/use-game";

export default function Home() {
  const { grid, gameActive, toggleCell, nextGrid, clearGrid, startGame, stopGame, randomGrid } =
    useGame();

  return (
    <main className="flex h-screen flex-col items-center justify-between gap-6 overflow-y-auto p-4 md:gap-10 md:p-8">
      <h1 className="text-center text-3xl font-bold md:text-4xl">Conway&apos;s Game of Life</h1>

      {/* Grid */}
      <div className="grid max-w-full grid-cols-[repeat(30,15px)] gap-1 overflow-auto overflow-x-auto px-2 md:grid-cols-[repeat(30,20px)]">
        {grid.map((row, x) =>
          row.map((item, y) => (
            <button
              key={`${x}-${y}`}
              className={clsx(
                "inline-block size-[15px] md:size-5",
                item ? "bg-orange-500" : "bg-gray-200",
              )}
              onClick={() => !gameActive && toggleCell(x, y)}
            ></button>
          )),
        )}
      </div>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-10">
        <button className="border-2 border-black px-3 py-2" onClick={randomGrid}>
          Random
        </button>

        <button
          className="border-2 border-black px-3 py-2"
          onClick={() => (gameActive ? stopGame() : startGame())}
        >
          {gameActive ? "Pause" : "Play"}
        </button>

        <button className="border-2 border-black px-3 py-2" onClick={nextGrid}>
          Next
        </button>

        <button className="border-2 border-black px-3 py-2" onClick={clearGrid}>
          Clear
        </button>
      </div>
    </main>
  );
}
