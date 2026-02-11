import React, { type ComponentProps, type ElementType } from "react";

export type BoxProps<T extends ElementType = "div"> = {
  as?: T;
} & ComponentProps<T>;

export const Box = React.forwardRef(
  <T extends ElementType = "div">(
    { as = "div", ...props }: BoxProps<T>,
    ref: React.Ref<any>,
  ) => {
    const Component = as;
    return <Component ref={ref} {...props} />;
  },
);
