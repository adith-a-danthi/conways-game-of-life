import { useRef } from "react";
import {
  ArrowPathIcon,
  PauseIcon,
  PlayIcon,
  ForwardIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useGame } from "@/use-game";
import { Button } from "@/components/Button";
import { InstructionsModal } from "./InstructionsModal";

export default function Home() {
  const { grid, gameActive, toggleCell, nextGrid, clearGrid, startGame, stopGame, randomGrid } =
    useGame();

  const instructionModalRef = useRef<HTMLDialogElement | null>(null);

  return (
    <main className="bg-darker text-light flex h-screen flex-col items-center justify-between gap-6 p-4 md:gap-10 md:p-8">
      <h1 className="text-center text-3xl font-bold md:text-4xl">Conway&apos;s Game of Life</h1>

      {/* Grid */}
      <div className="mx-auto grid max-w-full grid-cols-[repeat(30,20px)] gap-1 overflow-auto overflow-x-auto px-2">
        {grid.map((row, x) =>
          row.map((item, y) => (
            <button
              key={`${x}-${y}`}
              className={clsx("inline-block size-5", item ? "bg-orange-500" : "bg-light")}
              onClick={() => !gameActive && toggleCell(x, y)}
            />
          )),
        )}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10">
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

        <Button
          onClick={() => {
            instructionModalRef.current?.showModal();
          }}
        >
          <InformationCircleIcon className="size-5 shrink-0" /> Instructions
        </Button>
      </div>

      <InstructionsModal modalRef={instructionModalRef} />
    </main>
  );
}
