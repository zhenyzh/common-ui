import { clsx } from "clsx";
import type { ComponentProps, ElementType, ReactNode } from "react";
import s from "./container.module.css";

export type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  children?: ReactNode;
  className?: string;
} & ComponentProps<T>;

export const Container = <T extends ElementType = "div">({
  as: Component = "div",
  children,
  className,
  ...props
}: ContainerProps<T>) => {
  return (
    <div className={clsx(s.container, className)} {...props}>
      {children}
    </div>
  );
};
