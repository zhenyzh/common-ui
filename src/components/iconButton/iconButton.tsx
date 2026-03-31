import { clsx } from "clsx";
import type { ComponentProps } from "react";

import s from "./iconButton.module.css";

type IconButtonProps = {
  children: React.ReactNode;
} & ComponentProps<"button">;

export const IconButton = ({
  children,
  className,
  ...props
}: IconButtonProps) => {
  return (
    <button type="button" className={clsx(s.button, className)} {...props}>
      {children}
    </button>
  );
};
