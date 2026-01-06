import { clsx } from "clsx";
import type { ComponentProps, ElementType } from "react";

import s from "./line.module.css";

export type LineVariant = "vertical" | "horizontal";

export type LineProps<T extends ElementType = "div"> = {
  as?: T;
  variant?: LineVariant;
} & ComponentProps<T>;

export const Line = <T extends ElementType = "div">({
  as: Component = "div",
  children,
  className,
  variant = "vertical",
  ...props
}: LineProps<T>) => {
  const classNames = clsx(s.button, s[variant], className);

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  );
};
