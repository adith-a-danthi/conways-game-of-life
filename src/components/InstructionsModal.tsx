import type { MutableRefObject } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

type InstructionsModalProps = {
  modalRef?: MutableRefObject<HTMLDialogElement | null>;
};

export function InstructionsModal({ modalRef: ref }: Readonly<InstructionsModalProps>) {
  return (
    <dialog className="backdrop:bg-black/75 backdrop:backdrop-blur-sm" ref={ref}>
      <div className="bg-darker text-light grid w-full max-w-lg gap-4 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">Instructions</h3>
          <button
            className="bg-light text-darker size-5 rounded-full p-0.5 transition-colors duration-200 hover:bg-orange-500 active:bg-orange-500"
            onClick={() => {
              ref?.current?.close();
            }}
          >
            <XMarkIcon />
          </button>
        </div>
        <p>
          Conway&apos;s Game of Life is a cellular automaton simulation where cells on a grid evolve
          based on simple rules:
        </p>
        <ul className="list-inside list-disc">
          <li>Any live cell with 2-3 live neighbors survives.</li>
          <li>Any dead cell with exactly 3 live neighbors becomes alive.</li>
          <li>All other cells die or stay dead.</li>
        </ul>

        <p>
          These rules create complex patterns and behaviors from simple initial configurations. It
          demonstrates how emergent complexity can arise from basic principles.
        </p>
        <p className="text-sm">This is a simple implementation using a 30x30 grid. Click on a cell to toggle it.</p>
      </div>
    </dialog>
  );
}
