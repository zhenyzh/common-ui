import React, { ElementType, forwardRef } from "react";

type BoxProps<T extends ElementType> = {
  as?: T;
};

export type Props<T extends ElementType = "div"> = BoxProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof BoxProps<T>>;

export const Box = forwardRef(
  <T extends ElementType = "div">(
    { as, ...props }: Props<T>,
    ref: React.Ref<any>,
  ) => {
    const Component = as || "div";
    return <Component ref={ref} {...props} />;
  },
);
