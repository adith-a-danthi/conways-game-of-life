import type { ComponentProps, FC, PropsWithChildren } from "react";
import { clsx } from "clsx";

type ButtonProps = PropsWithChildren<ComponentProps<"button">>;

export const Button: FC<ButtonProps> = ({
  className,
  onClick,
  children,
}: Readonly<ButtonProps>) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        className,
        "text-darker inline-flex items-center justify-center gap-1 px-3 py-1.5 font-semibold sm:px-6 sm:py-2 text-sm sm:text-base",
        "bg-light hover:bg-orange-500",
        "shadow-btn active:shadow-none",
        "border-dark border-b-2 border-r-2 border-solid active:border-orange-500",
        "-translate-x-1 -translate-y-1 transition-all duration-200 active:translate-x-0 active:translate-y-0",
      )}
    >
      {children}
    </button>
  );
};
